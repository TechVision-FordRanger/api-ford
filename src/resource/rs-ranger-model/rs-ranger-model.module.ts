import { Module } from '@nestjs/common';
import { RsRangerModelService } from './rs-ranger-model.service';

@Module({
  controllers: [],
  providers: [RsRangerModelService],
})
export class RsRangerModelModule {}
