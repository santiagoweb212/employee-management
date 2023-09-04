import { Module } from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { DepartamentController } from './departament.controller';
import { departamentProviders } from './departament.providers';

@Module({
  controllers: [DepartamentController],
  providers: [DepartamentService, ...departamentProviders],
})
export class DepartamentModule {}
