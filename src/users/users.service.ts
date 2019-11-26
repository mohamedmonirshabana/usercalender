import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './users.model';
import { CreateuserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService{

    constructor(@InjectModel('user') private readonly userModel: Model<UserModel> ){}

    async Createuser( createuserDto : CreateuserDto ){

        const salt = await bcrypt.genSalt(10);
        const pass = createuserDto.password;
        const newpass  = await bcrypt.hash(pass, salt);
        
        createuserDto.password = newpass;
        const newuser = new this.userModel(createuserDto);
        await newuser.save();
        return newuser.id;
        //return newuser;
    }
    
    getuser():string{
        return "user name : Mohamed";
    }
}