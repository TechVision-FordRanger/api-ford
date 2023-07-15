import { Module } from '@nestjs/common';
import { RsRangerModelService } from './rs-ranger-model.service';
import { RsRangerModelController } from './rs-ranger-model.controller';

@Module({
  controllers: [RsRangerModelController],
  providers: [RsRangerModelService]
})
export class RsRangerModelModule {}
