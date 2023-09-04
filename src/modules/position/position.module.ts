import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { positionProviders } from './position.providers';

@Module({
  controllers: [PositionController],
  providers: [PositionService, ...positionProviders],
})
export class PositionModule {}
