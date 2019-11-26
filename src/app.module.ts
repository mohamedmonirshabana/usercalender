import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//import { MulterModule } from '@nestjs/platform-express';



@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () =>{
        return {
          uri: 'mongodb://localhost:27017/usercalender',
          useFindAndModify: false,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }
      }
    }), 
    UsersModule,
   
  ],
  providers: [AppService],
})
export class AppModule {}
