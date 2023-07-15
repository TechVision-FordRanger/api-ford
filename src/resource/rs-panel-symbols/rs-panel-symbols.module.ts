import { Module } from '@nestjs/common';
import { RsPanelSymbolsService } from './rs-panel-symbols.service';

@Module({
  controllers: [],
  providers: [RsPanelSymbolsService],
})
export class RsPanelSymbolsModule {}
