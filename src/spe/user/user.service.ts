import { Injectable } from '@nestjs/common';
import { RsUserService } from 'src/resource/rs-user/rs-user.service';
import { DefaultResponseDto } from 'src/shared/dto/default-response.dto';

@Injectable()
export class UserService {
  constructor(private rsUserService: RsUserService) {}

  async findById(id: number) {
    try {
      const user = await this.rsUserService.findOne(id);
      if (!user) {
        return new DefaultResponseDto(false, 'usuário não encontrado', null);
      }
      return new DefaultResponseDto(true, 'usuário encontrado', user);
    } catch (error) {
      return new DefaultResponseDto(false, 'erro', null);
    }
  }
}
