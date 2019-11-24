import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CalendersModule } from './calenders/calenders.module';

@Module({
  imports: [AuthModule, UsersModule, CalendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
