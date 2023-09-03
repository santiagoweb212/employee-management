import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { employeeProviders } from './employee.providers';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProviders],
})
export class EmployeeModule {}
