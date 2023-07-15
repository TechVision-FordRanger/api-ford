import { Injectable } from '@nestjs/common';
import { CreateRsRangerModelDto } from './dto/create-rs-ranger-model.dto';
import { UpdateRsRangerModelDto } from './dto/update-rs-ranger-model.dto';

@Injectable()
export class RsRangerModelService {
  create(createRsRangerModelDto: CreateRsRangerModelDto) {
    return 'This action adds a new rsRangerModel';
  }

  findAll() {
    return `This action returns all rsRangerModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rsRangerModel`;
  }

  update(id: number, updateRsRangerModelDto: UpdateRsRangerModelDto) {
    return `This action updates a #${id} rsRangerModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} rsRangerModel`;
  }
}
