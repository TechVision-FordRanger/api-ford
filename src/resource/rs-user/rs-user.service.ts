import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRsUserDto } from "./dto/create-rs-user.dto";
import { UpdateRsUserDto } from "./dto/update-rs-user.dto";
import { User } from "./entities/rs-user.entity";

@Injectable()
export class RsUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createRsUserDto: CreateRsUserDto) {
    return this.userRepository.save(createRsUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  update(id: number, updateRsUserDto: UpdateRsUserDto) {
    return this.userRepository.update(id, updateRsUserDto);
  }
}
