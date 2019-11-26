import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.Schema';
import { MulterModule } from '@nestjs/platform-express';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'user', schema: UserSchema}]),
        MulterModule.register({
            dest: '../../uploads'
        }) 
   
],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule{}