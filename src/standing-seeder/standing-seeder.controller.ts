import { Controller, Get } from '@nestjs/common';
import { StandingSeederService } from './standing-seeder.service';

@Controller('standing-seeder')
export class StandingSeederController {
  constructor(private readonly standingSeederService: StandingSeederService) {}

  @Get()
  async seedStandings() {
    return await this.standingSeederService.seedStandings();
  }
}
