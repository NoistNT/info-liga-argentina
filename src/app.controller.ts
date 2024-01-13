import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcome(): {
    service: string;
    version: string;
    teams: { list: string; team: string };
  } {
    return this.appService.getWelcome();
  }
}
