import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamScraperController } from './team-scraper.controller';
import { TeamScraperService } from './team-scraper.service';
import { TeamSchema } from 'src/schemas/team.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
  controllers: [TeamScraperController],
  providers: [TeamScraperService],
})
export class TeamScraperModule {}
