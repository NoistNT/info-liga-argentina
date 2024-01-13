import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { teams } from './team-data';

@Injectable()
export class TeamService {
  private teams = teams;

  create({
    id,
    position,
    name,
    points,
    played,
    wins,
    draws,
    losses,
    goalsFor,
    goalsAgainst,
    goalsDifference,
  }: CreateTeamDto) {
    const newTeam = new CreateTeamDto(
      id,
      position,
      name,
      points,
      played,
      wins,
      draws,
      losses,
      goalsFor,
      goalsAgainst,
      goalsDifference,
    );

    return this.teams.push(newTeam);
  }

  findAll() {
    if (!this.teams) {
      throw new NotFoundException('Teams not found');
    }

    return this.teams;
  }

  findOne(id: string) {
    const team = this.teams.find((team) => team.id === id);

    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    return team;
  }
}
