import { Module } from "@nestjs/common";
import { RsUserModule } from "src/resource/rs-user/rs-user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [RsUserModule],
})
export class AuthModule {}
