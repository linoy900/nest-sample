import { Module } from '@nestjs/common';
import { SurveyquestionsService } from './surveyquestions.service';
import { SurveyquestionsController } from './surveyquestions.controller';

@Module({
  controllers: [SurveyquestionsController],
  providers: [SurveyquestionsService],
})
export class SurveyquestionsModule {}
