export class CreateTeamDto {
  constructor(
    public name: string,
    public position: number,
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
