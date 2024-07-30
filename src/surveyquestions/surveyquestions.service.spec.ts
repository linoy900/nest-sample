import { Test, TestingModule } from '@nestjs/testing';
import { SurveyquestionsService } from './surveyquestions.service';

describe('SurveyquestionsService', () => {
  let service: SurveyquestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyquestionsService],
    }).compile();

    service = module.get<SurveyquestionsService>(SurveyquestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
