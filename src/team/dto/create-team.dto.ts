export class CreateTeamDto {
  constructor(
    public id: number,
    public name: string,
    public points: number,
    public played: number,
    public wins: number,
    public draws: number,
    public losses: number,
    public goalsFor: number,
    public goalsAgainst: number,
    public goalsDifference: number,
  ) {}
}
