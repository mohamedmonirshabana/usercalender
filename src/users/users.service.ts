import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './users.model';
import { CreateuserDto } from './user.dto';

@Injectable()
export class UsersService{

    constructor(@InjectModel('user') private readonly userModel: Model<UserModel> ){}

    Createuser( createuserDto : CreateuserDto ): Promise<UserModel>{
        const newuser = new this.userModel(createuserDto);
        newuser.save();
        return newuser;
    }
    
    getuser():string{
        return "user name : Mohamed";
    }
}