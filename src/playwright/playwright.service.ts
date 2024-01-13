import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';

@Injectable()
export class PlaywrightService {
  async performAutomation() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.promiedos.com.ar/primera');

    const teamsList = await page.$$eval(
      '.tablesorter1 > tbody > tr',
      (rows) => {
        return rows.map((row) => {
          return {
            id: crypto.randomUUID(),
            position: Number(row.children[0].textContent),
            name: row.children[1].textContent,
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

    return teamsList;
  }
}
