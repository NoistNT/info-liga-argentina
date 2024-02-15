import { Controller, Get } from '@nestjs/common';
import { TeamScraperService } from './team-scraper.service';

@Controller('team-scraper')
export class TeamScraperController {
  constructor(private readonly teamScraperService: TeamScraperService) {}

  @Get()
  async scrapeTeams() {
    const teams = await this.teamScraperService.scrapeTeams();
    return {
      success: teams.success,
      message: teams.message,
      teams: teams.teams,
    };
  }
}
