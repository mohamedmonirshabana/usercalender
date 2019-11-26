import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateuserDto{
    @IsString()
    @IsNotEmpty()
    fullname: string;
    @IsString()
    @IsEmail()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
    
    @IsString()
    profilepics: string;
}