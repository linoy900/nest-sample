import { Test, TestingModule } from '@nestjs/testing';
import { SurveyquestionsController } from './surveyquestions.controller';
import { SurveyquestionsService } from './surveyquestions.service';

describe('SurveyquestionsController', () => {
  let controller: SurveyquestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyquestionsController],
      providers: [SurveyquestionsService],
    }).compile();

    controller = module.get<SurveyquestionsController>(SurveyquestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
