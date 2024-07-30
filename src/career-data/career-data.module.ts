import { Module } from '@nestjs/common';
import { CareerDataService } from './career-data.service';
import { CareerDataController } from './career-data.controller';

@Module({
  controllers: [CareerDataController],
  providers: [CareerDataService],
})
export class CareerDataModule {}
