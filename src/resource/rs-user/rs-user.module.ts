import { Module } from '@nestjs/common';
import { RsUserService } from './rs-user.service';
import { RsUserController } from './rs-user.controller';

@Module({
  controllers: [RsUserController],
  providers: [RsUserService]
})
export class RsUserModule {}
