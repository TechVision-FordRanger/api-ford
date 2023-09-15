import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateRsUserDto } from "src/resource/rs-user/dto/create-rs-user.dto";
import { UpdateRsUserDto } from "src/resource/rs-user/dto/update-rs-user.dto";
import { OnboardingService } from "./onboarding.service";

@ApiTags("onboarding")
@Controller("onboarding")
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post("/create")
  createUser(@Body() createRsUserDto: CreateRsUserDto) {
    return this.onboardingService.createUser(createRsUserDto);
  }

  @Put("/update/:id")
  updateUser(
    @Param("id") id: string,
    @Body() updateRsUserDto: UpdateRsUserDto,
  ) {
    return this.onboardingService.updateUser(+id, updateRsUserDto);
  }
}
