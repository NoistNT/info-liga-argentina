import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  private teams: Team[] = [
    {
      id: 1,
      name: 'River Plate',
      points: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
    },
    {
      id: 2,
      name: 'Racing Club',
      points: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
    },
    {
      id: 3,
      name: 'Defensa y Justicia',
      points: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
    },
    {
      id: 4,
      name: 'Independiente',
      points: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
    },
    {
      id: 5,
      name: 'San Lorenzo',
      points: 0,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalsDifference: 0,
    },
  ];

  create({
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
    const id = this.teams.length + 1;

    const newTeam = new CreateTeamDto(
      id,
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

  findOne(id: number) {
    const team = this.teams.find((team) => team.id === id);

    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    return team;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    const teamIndex = this.teams.findIndex((team) => team.id === id);

    if (teamIndex === -1) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    const updatedTeam = {
      ...this.teams[teamIndex],
      ...updateTeamDto,
    };

    this.teams[teamIndex] = updatedTeam;

    return updatedTeam;
  }

  remove(id: number) {
    return this.teams.filter((team) => team.id !== id);
  }
}
