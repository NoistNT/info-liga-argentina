import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { TeamScraperModule } from './team-scraper/team-scraper.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot(),
    // Connect to MongoDB using MongooseModule
    MongooseModule.forRootAsync({
      // Import ConfigModule to use ConfigService
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // Get MongoDB URI from ConfigService
        uri: configService.get<string>('MONGODB_URI'),
      }),
      // Inject ConfigService
      inject: [ConfigService],
    }),
    TeamModule,
    TeamScraperModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
