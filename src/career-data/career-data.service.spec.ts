import { Test, TestingModule } from '@nestjs/testing';
import { CareerDataService } from './career-data.service';

describe('CareerDataService', () => {
  let service: CareerDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareerDataService],
    }).compile();

    service = module.get<CareerDataService>(CareerDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
