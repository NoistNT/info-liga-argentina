import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PlaywrightModule } from './playwright/playwright.module';

@Module({
  imports: [TeamModule, PlaywrightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
