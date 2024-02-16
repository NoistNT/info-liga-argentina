import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StandingScraperController } from './standing-scraper.controller';
import { StandingScraperService } from './standing-scraper.service';
import { StandingSchema } from 'src/schemas/standing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Standing', schema: StandingSchema }]),
  ],
  controllers: [StandingScraperController],
  providers: [StandingScraperService],
})
export class StandingScraperModule {}
