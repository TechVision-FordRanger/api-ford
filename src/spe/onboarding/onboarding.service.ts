import { Injectable } from '@nestjs/common';
import { CreateRsUserDto } from 'src/resource/rs-user/dto/create-rs-user.dto';
import { UpdateRsUserDto } from 'src/resource/rs-user/dto/update-rs-user.dto';
import { RsUserService } from 'src/resource/rs-user/rs-user.service';
import { DefaultResponseDto } from 'src/shared/dto/default-response.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OnboardingService {
  constructor(private rsUserService: RsUserService) {}

  async createUser(createRsUserDto: CreateRsUserDto) {
    try {
      createRsUserDto.uuid = uuid();
      createRsUserDto.password = 'onboarding';

      const emailExists = await this.rsUserService.findOneByEmail(
        createRsUserDto.email,
      );

      if (emailExists) {
        return new DefaultResponseDto(
          false,
          'Email já cadastrado',
          'Email já cadastrado',
        );
      }

      const newUser = await this.rsUserService.create(createRsUserDto);

      return new DefaultResponseDto(
        true,
        'Usuário cadastrado com sucesso',
        newUser,
      );
    } catch (error) {
      return new DefaultResponseDto(false, 'Erro ao criar usuário', error);
    }
  }

  async updateUser(id: number, updateRsUserDto: UpdateRsUserDto) {
    try {
      if (updateRsUserDto.renavam) {
        updateRsUserDto = this.checkRenavam(updateRsUserDto);
      }

      await this.rsUserService.update(id, updateRsUserDto);
      const updatedUser = await this.rsUserService.findOne(id);

      return new DefaultResponseDto(
        true,
        'Usuário atualizado com sucesso',
        updatedUser,
      );
    } catch (error) {
      return new DefaultResponseDto(false, 'Erro ao atualizar usuário', null);
    }
  }

  private checkRenavam(updateRsUserDto: UpdateRsUserDto): UpdateRsUserDto {
    if (
      parseInt(
        updateRsUserDto.renavam.substring(
          updateRsUserDto.renavam.length - 1,
          updateRsUserDto.renavam.length,
        ),
      ) %
        2 ==
      0
    ) {
      updateRsUserDto.rangerColor = 'blue';
      return updateRsUserDto;
    } else {
      updateRsUserDto.rangerColor = 'red';
      return updateRsUserDto;
    }
  }
}
