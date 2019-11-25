import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './users.model';

@Injectable()
export class UsersService{

    constructor(@InjectModel('users') private readonly userModel: Model<UserModel> ){}

    getuser():string{
        return "user name : Mohamed";
    }
}