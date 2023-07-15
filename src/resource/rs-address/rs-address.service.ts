import { Injectable } from '@nestjs/common';
import { CreateRsAddressDto } from './dto/create-rs-address.dto';
import { UpdateRsAddressDto } from './dto/update-rs-address.dto';

@Injectable()
export class RsAddressService {
  create(createRsAddressDto: CreateRsAddressDto) {
    return 'This action adds a new rsAddress';
  }

  findAll() {
    return `This action returns all rsAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rsAddress`;
  }

  update(id: number, updateRsAddressDto: UpdateRsAddressDto) {
    return `This action updates a #${id} rsAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} rsAddress`;
  }
}
