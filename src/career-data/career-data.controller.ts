import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  HttpStatus,
  Request,
  HttpCode,
  Version,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiSecurity,
  ApiBody,
} from '@nestjs/swagger';
import { CareerDataService } from './career-data.service';
import { CreateCareerDataDto } from './dto/create-career-data.dto';
import { UpdateCareerDataDto } from './dto/update-career-data.dto';
import { MESSAGES } from '../common/messages/en/careerdata.messages';
import { handleException } from '../common/helper/response.helper';

@ApiSecurity('api-key')
@ApiTags('career-data')
@Controller({ path: 'api/career-data' })
export class CareerDataController {
  constructor(private readonly careerDataService: CareerDataService) {}

  @ApiOperation({ summary: 'List surveyqestions' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @Version('1')
  @Get()
  findAll() {
    try {
      return {
        statusCode: HttpStatus.OK,
        message: MESSAGES.listCareerDataSuccess,
        error: '',
        Data: [
          {
            s1: [
              { answer: ['a1', 'a2', 'a3'], q: 'Q1' },
              { answer: ['a1', 'a2', 'a3'], q: 'Q2' },
            ],
          },
          {
            s2: [
              { answer: ['a1', 'a2', 'a3'], q: 'Q3' },
              { answer: ['a1', 'a2', 'a3'], q: 'Q5' },
            ],
          },
        ],
      };
    } catch (error) {
      handleException(error);
    }
  }
  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerDataService.findOne(+id);
  }
}
