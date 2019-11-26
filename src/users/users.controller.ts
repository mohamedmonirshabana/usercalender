import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateuserDto } from "./user.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('users')
export class UsersController{
    constructor(private readonly userService: UsersService){}

    @Post('register')
    @UseInterceptors(FileInterceptor('image'))
    async adduser(
        @Body() createuserDto: CreateuserDto,
        @UploadedFile()file){
            // const response = {
            //     originalname: file.originalname,
            //     filename: file.filename
            // };
        createuserDto.profilepics = file.originalname;
        console.log(file);
        const result = await this.userService.Createuser(createuserDto);
        return {id: result};
    }

    @Get(':id')
    async getuser(@Param('id') id:string){
        const res = await this.userService.userinfo(id);
        return  { name: res.fullname , profilepics: res.profilepics, Email: res.username };
    }

    @Post(':id')
    async changepassword(@Param('id')id:string, @Body('oldpassword') oldPassword:string, @Body('newPassword') newPassword:string){
        const result = await this.userService.changePassword(id, oldPassword,newPassword);
        return result;
    }

}