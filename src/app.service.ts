import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): {
    service: string;
    version: string;
    teams: { list: string; team: string };
  } {
    return {
      service: 'info-liga-argentina',
      version: '1.0.0',
      teams: {
        list: 'localhost:3001/team',
        team: 'localhost:3001/team/1',
      },
    };
  }
}
