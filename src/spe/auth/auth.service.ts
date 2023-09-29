import { Injectable } from "@nestjs/common";
import { RsUserService } from "src/resource/rs-user/rs-user.service";
import { DefaultResponseDto } from "src/shared/dto/default-response.dto";
import { AuthDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(private rsUserService: RsUserService) {}

  async auth(authObj: AuthDto) {
    try {
      const user = await this.rsUserService.findOneByEmail(authObj.email);
      if (!user) {
        return new DefaultResponseDto(false, "Usuário não encontrado", null);
      }

      if (user.password != authObj.password) {
        return new DefaultResponseDto(false, "Senha incorreta", null);
      }

      return new DefaultResponseDto(true, "sucesso!", user);
    } catch (error) {
      return new DefaultResponseDto(false, "erro ao fazer log in", error);
    }
  }
}
