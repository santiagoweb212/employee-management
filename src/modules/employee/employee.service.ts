import { Injectable, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from '../../modules/employee/model/employee.model';
import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: typeof Employee,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    console.log('--->>>', createEmployeeDto);
    const newEmployee = this.employeeRepository.create({
      ...createEmployeeDto,
    });
    return newEmployee;
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
