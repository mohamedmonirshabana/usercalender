import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/userCalender')],
  providers: [AppService],
})
export class AppModule {}
