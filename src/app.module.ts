import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StandingScraperModule } from './standing-scraper/standing-scraper.module';
import { StandingSeederModule } from './standing-seeder/standing-seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    StandingScraperModule,
    StandingSeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
