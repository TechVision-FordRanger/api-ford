import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { RsPanelSymbolsModule } from './resource/rs-panel-symbols/rs-panel-symbols.module';
import { RsRangerModelModule } from './resource/rs-ranger-model/rs-ranger-model.module';
import { RsAddressModule } from './resource/rs-address/rs-address.module';
import { RsUserModule } from './resource/rs-user/rs-user.module';
import { User } from './resource/rs-user/entities/rs-user.entity';
import { OnboardingModule } from './spe/onboarding/onboarding.module';
import { AuthModule } from './spe/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'rm86750-fiap.database.windows.net',
      database: 'db-ford',
      username: 'techvision',
      password: 'ford@2023',
      extra: {
        trustServerCertificate: true,
        encrypt: true,
      },
      synchronize: false,
      entities: [User],
    }),
    RsPanelSymbolsModule,
    RsRangerModelModule,
    RsAddressModule,
    RsUserModule,
    OnboardingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
