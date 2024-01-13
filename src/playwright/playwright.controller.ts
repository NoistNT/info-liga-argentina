import { Controller, Get } from '@nestjs/common';
import { PlaywrightService } from './playwright.service';

@Controller('playwright')
export class PlaywrightController {
  constructor(private readonly playwrightService: PlaywrightService) {}

  @Get()
  async performAutomation() {
    const teams = await this.playwrightService.performAutomation();

    if (teams) {
      return teams;
    }

    return { success: false, message: 'Table not found on the website' };
  }
}
