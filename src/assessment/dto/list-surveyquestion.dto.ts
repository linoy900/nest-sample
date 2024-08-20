import { IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ListSurveyquestionDto {
  @ApiProperty({ type: 'string', description: 'Survey verson' })
  @IsNotEmpty()
  version: string;
}
