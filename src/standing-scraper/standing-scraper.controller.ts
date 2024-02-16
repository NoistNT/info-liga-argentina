import { Controller, Get } from '@nestjs/common';
import { StandingScraperService } from './standing-scraper.service';

@Controller('standing-scraper')
export class StandingScraperController {
  constructor(
    private readonly standingScraperService: StandingScraperService,
  ) {}

  @Get()
  async scrapeStandings() {
    const standings = await this.standingScraperService.scrapeStandings();
    return {
      success: standings.success,
      message: standings.message,
      standings: standings.standings,
    };
  }
}
