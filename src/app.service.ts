import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): {
    service: string;
    version: string;
  } {
    return {
      service: 'info-liga-argentina-scraper',
      version: '1.0.0',
    };
  }
}
