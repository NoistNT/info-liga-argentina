import { Controller, Get } from '@nestjs/common';
import { StandingSeederService } from './standing-seeder.service';

@Controller('standing-seeder')
export class StandingSeederController {
  constructor(private readonly standingSeederService: StandingSeederService) {}

  @Get()
  async seedStandings() {
    const seededStandings = await this.standingSeederService.seedStandings();
    return {
      success: seededStandings.success,
      message: seededStandings.message,
    };
  }
}
