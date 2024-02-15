import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/schemas/team.schema';
import { chromium } from 'playwright';

@Injectable()
export class TeamScraperService {
  constructor(@InjectModel('Team') private teamModel: Model<Team>) {}

  async scrapeTeams(): Promise<{
    success: boolean;
    message: string;
    teams?: Team[];
  }> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.promiedos.com.ar/primera');

    const teamsList = await page.$$eval(
      '.tablesorter5 > tbody > tr',
      (rows) => {
        return rows.map((row) => {
          const name = row.children[1].textContent;
          return {
            name: name ? name.trim() : '',
            position: Number(row.children[0].textContent),
            points: Number(row.children[2].textContent),
            played: Number(row.children[3].textContent),
            wins: Number(row.children[4].textContent),
            draws: Number(row.children[5].textContent),
            losses: Number(row.children[6].textContent),
            goalsFor: Number(row.children[7].textContent),
            goalsAgainst: Number(row.children[8].textContent),
            goalsDifference: Number(row.children[9].textContent),
          };
        });
      },
    );

    await page.close();
    await browser.close();

    if (!teamsList) {
      return { success: false, message: 'Table not found on the website' };
    }

    await this.teamModel.insertMany(teamsList);
    return {
      success: true,
      message: 'Teams scraped successfully',
      teams: teamsList,
    };
  }
}
