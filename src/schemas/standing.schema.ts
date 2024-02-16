import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Standing {
  @Prop({ required: true, unique: true })
  teamId: number;
  @Prop({ required: true })
  badge?: string;
  @Prop({ required: true, trim: true })
  name: string;
  @Prop({ required: true, default: 0 })
  position: number;
  @Prop({ required: true, default: 0 })
  points: number;
  @Prop({ required: true, default: 0 })
  played: number;
  @Prop({ required: true, default: 0 })
  wins: number;
  @Prop({ required: true, default: 0 })
  draws: number;
  @Prop({ required: true, default: 0 })
  losses: number;
  @Prop({ required: true, default: 0 })
  goalsFor: number;
  @Prop({ required: true, default: 0 })
  goalsAgainst: number;
  @Prop({ required: true, default: 0 })
  goalsDifference: number;
}

export const StandingSchema = SchemaFactory.createForClass(Standing);
