import { PartialType } from '@nestjs/mapped-types';
import { CreateRsRangerModelDto } from './create-rs-ranger-model.dto';

export class UpdateRsRangerModelDto extends PartialType(CreateRsRangerModelDto) {}
