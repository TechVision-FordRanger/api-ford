import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsPanelSymbolsModule } from './resource/rs-panel-symbols/rs-panel-symbols.module';
import { RsRangerModelModule } from './resource/rs-ranger-model/rs-ranger-model.module';
import { RsAddressModule } from './resource/rs-address/rs-address.module';
import { RsUserModule } from './resource/rs-user/rs-user.module';

@Module({
  imports: [
    RsPanelSymbolsModule,
    RsRangerModelModule,
    RsAddressModule,
    RsUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
