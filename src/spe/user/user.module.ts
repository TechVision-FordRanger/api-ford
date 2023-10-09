import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RsUserModule } from 'src/resource/rs-user/rs-user.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [RsUserModule],
})
export class UserModule {}
