import { PartialType } from '@nestjs/mapped-types';
import { CreateRsAddressDto } from './create-rs-address.dto';

export class UpdateRsAddressDto extends PartialType(CreateRsAddressDto) {}
