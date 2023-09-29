import { Module } from "@nestjs/common";
import { RsUserModule } from "src/resource/rs-user/rs-user.module";
import { AuthService } from "./auth.service";

@Module({
  controllers: [],
  providers: [AuthService],
  imports: [RsUserModule],
})
export class AuthModule {}
