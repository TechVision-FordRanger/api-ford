import { PartialType } from "@nestjs/mapped-types";
import { CreateRsUserDto } from "./create-rs-user.dto";

export class UpdateRsUserDto extends PartialType(CreateRsUserDto) {}
