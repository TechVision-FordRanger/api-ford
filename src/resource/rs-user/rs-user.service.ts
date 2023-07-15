import { Injectable } from '@nestjs/common';
import { CreateRsUserDto } from './dto/create-rs-user.dto';
import { UpdateRsUserDto } from './dto/update-rs-user.dto';

@Injectable()
export class RsUserService {
  create(createRsUserDto: CreateRsUserDto) {
    return 'This action adds a new rsUser';
  }

  findAll() {
    return `This action returns all rsUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rsUser`;
  }

  update(id: number, updateRsUserDto: UpdateRsUserDto) {
    return `This action updates a #${id} rsUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} rsUser`;
  }
}
