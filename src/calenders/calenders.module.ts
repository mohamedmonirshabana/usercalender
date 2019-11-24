import { Module } from '@nestjs/common';
import { CalendersController } from './calenders.controller';
import { CalendersService } from './calenders.service';

@Module({
  controllers: [CalendersController],
  providers: [CalendersService]
})
export class CalendersModule {}
