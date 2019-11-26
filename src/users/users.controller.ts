import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateuserDto } from "./user.dto";

@Controller('users')
export class UsersController{
    constructor(private readonly userService: UsersService){}

    @Post('register')
    async adduser(
        @Body() createuserDto: CreateuserDto){
        console.log(createuserDto);
        const result = await this.userService.Createuser(createuserDto);
        //return {id: result};
    }
    
    @Get()
    getuser(){
        return this.userService.getuser();
    }

}