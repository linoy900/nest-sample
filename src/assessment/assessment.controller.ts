import {
  Controller,
  Get,
  Post,
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
import { MESSAGES } from '../common/messages/en/leadgeneration.messages';
import { handleException } from '../common/helper/response.helper';

import { AssessmentService } from './assessment.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import {FirestoreService} from '../shared/firestore.service';



@ApiSecurity('api-key')
@ApiTags('lead-generation')
@Controller({ path: 'api/assessment' })
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService,
    private readonly firestoreService: FirestoreService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create project' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @Version('1')
  create(@Body() createAssessmentDto: CreateAssessmentDto) {
    return this.assessmentService.create(createAssessmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'get project' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @Version('1')
  async findItems() {
    try {  
    
    const data = await this.firestoreService.getDocument('your-collection', 'your-docId');
    return {
      statusCode: HttpStatus.OK,
      message: MESSAGES.addLeadSuccess,
      error: '',
      Data: data,
    };
  } catch (error) {
   handleException(error)   
  }
  }
  
}
