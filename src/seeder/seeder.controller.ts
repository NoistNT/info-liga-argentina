import { Controller, Get } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seeder')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get()
  async seedTeams() {
    const seededTeams = await this.seederService.seedTeams();
    return { success: seededTeams.success, message: seededTeams.message };
  }
}
