import { Injectable } from '@nestjs/common';
import { CreateCareerDataDto } from './dto/create-career-data.dto';
import { UpdateCareerDataDto } from './dto/update-career-data.dto';

@Injectable()
export class CareerDataService {
  create(createCareerDataDto: CreateCareerDataDto) {
    return 'This action adds a new careerDatum';
  }

  findAll() {
    return `This action returns all careerData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerDatum`;
  }

  update(id: number, updateCareerDataDto: UpdateCareerDataDto) {
    return `This action updates a #${id} careerDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerDatum`;
  }
}
