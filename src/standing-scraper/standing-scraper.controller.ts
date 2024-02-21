import { Controller, Get } from '@nestjs/common';
import { StandingScraperService } from './standing-scraper.service';

@Controller('standing-scraper')
export class StandingScraperController {
  constructor(
    private readonly standingScraperService: StandingScraperService,
  ) {}

  @Get()
  async scrapeStandings() {
    return await this.standingScraperService.scrapeStandings();
  }
}
