import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
    getuser():string{
        return "user name : Mohamed";
    }
}