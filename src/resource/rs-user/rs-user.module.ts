import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/rs-user.entity';
import { RsUserService } from './rs-user.service';

@Module({
  controllers: [],
  providers: [RsUserService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [RsUserService],
})
export class RsUserModule {}
