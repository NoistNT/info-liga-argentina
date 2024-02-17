import { Injectable } from '@nestjs/common';

interface ServiceInfo {
  service: string;
  version: string;
}

@Injectable()
export class AppService {
  getWelcome(): ServiceInfo {
    return {
      service: 'info-liga-argentina-scraper',
      version: '1.0.0',
    };
  }
}
