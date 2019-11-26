import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './users.model';
import { CreateuserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { async } from "rxjs/internal/scheduler/async";

@Injectable()
export class UsersService{

    constructor(@InjectModel('user') private readonly userModel: Model<UserModel> ){}

    async Createuser( createuserDto : CreateuserDto ){
        //Finish Create user 
        const salt = await bcrypt.genSalt(10);
        createuserDto.password = await bcrypt.hash(createuserDto.password, salt);;
        const newuser = new this.userModel(createuserDto);
        await newuser.save();
        return newuser.id;
    }
    
    //Get info for user by Id 
    async userinfo(id: string){
        const result = await this.userModel.findById(id);
        if(result){
            return result;
        }
        throw new Error('user not found');
     }

     //Change Password 
     async changePassword(id: string, oldpassword: string, newpassword: string){
        const userprofile = await this.userModel.findById(id);
        if(userprofile){
            const salt = await bcrypt.genSalt(10);
            const oldpasscorrect = await bcrypt.compare(oldpassword, salt, async (err, res) =>{
                if(res){
                    const newpass = await bcrypt.hash(newpassword, salt);
                    userprofile.password = newpass;
                    userprofile.save();
                }else{
                    throw new Error('your password not valid');
                }

            });
        } 
     }

    
}