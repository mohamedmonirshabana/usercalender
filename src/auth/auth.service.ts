import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../users/users.model';
import { LoginUserDto } from './loginuser.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserModel> ,
        private readonly jwtService : JwtService
        ){}

    //Login user 
    async validateUser(username: string, password: string){
        const user = await this.userModel.findOne(username);
        if(user){
            const salt = await bcrypt.genSalt(10);
            const comparePassword = await bcrypt.compare(password, user.password);
            if(comparePassword){
                const payload = { userName: user.fullname, usID: user.id, mail: user.username };
                return {
                    accessToken: this.jwtService.sign(payload),
                }
            }
        }

    }

}