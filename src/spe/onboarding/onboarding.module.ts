import { Module } from "@nestjs/common";
import { OnboardingService } from "./onboarding.service";
import { OnboardingController } from "./onboarding.controller";
import { RsUserModule } from "src/resource/rs-user/rs-user.module";

@Module({
  controllers: [OnboardingController],
  providers: [OnboardingService],
  imports: [RsUserModule],
})
export class OnboardingModule {}
