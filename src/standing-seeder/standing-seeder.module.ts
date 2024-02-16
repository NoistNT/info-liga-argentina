import { Module } from '@nestjs/common';
import { StandingSeederService } from './standing-seeder.service';
import { StandingSeederController } from './standing-seeder.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StandingSchema } from 'src/schemas/standing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Standing', schema: StandingSchema }]),
  ],
  controllers: [StandingSeederController],
  providers: [StandingSeederService],
})
export class StandingSeederModule {}
