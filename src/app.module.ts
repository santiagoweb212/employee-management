import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ProyectModule } from './modules/proyect/proyect.module';
import { DepartamentModule } from './modules/departament/departament.module';
import { PositionModule } from './modules/position/position.module';
import { MockupDataUploadModule } from './modules/mockup-data-upload/mockup-data-upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoreModule,
    EmployeeModule,
    ProyectModule,
    DepartamentModule,
    PositionModule,
    MockupDataUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
