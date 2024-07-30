import { Test, TestingModule } from '@nestjs/testing';
import { CareerDataController } from './career-data.controller';
import { CareerDataService } from './career-data.service';

describe('CareerDataController', () => {
  let controller: CareerDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareerDataController],
      providers: [CareerDataService],
    }).compile();

    controller = module.get<CareerDataController>(CareerDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
