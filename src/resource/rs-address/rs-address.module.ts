import { Module } from '@nestjs/common';
import { RsAddressService } from './rs-address.service';

@Module({
  controllers: [],
  providers: [RsAddressService],
})
export class RsAddressModule {}
