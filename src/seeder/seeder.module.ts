import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from 'src/schemas/team.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
