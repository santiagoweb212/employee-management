import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { projectProvider } from './project.providers';

@Module({
  controllers: [ProyectController],
  providers: [ProyectService, ...projectProvider],
})
export class ProyectModule {}
