import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto{
    @IsEmail()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}