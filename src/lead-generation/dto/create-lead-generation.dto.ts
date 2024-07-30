import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsArray,
    ArrayMinSize,
    IsDate,
    IsOptional,
    IsBoolean,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
export class CreateLeadGenerationDto {
    @ApiProperty({ type: 'string', description: 'First Name' })
    @IsNotEmpty()
    firstName: string;
  
    @ApiProperty({type: 'string',  description: 'First Name' })
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({type: 'number',  description: 'age' })
    @IsNotEmpty()
    age: number;
}
