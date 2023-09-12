import { Injectable, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from '../../modules/employee/model/employee.model';
import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
import { Proyect } from '../proyect/model/proyect.model';
import { Position } from '../position/model/position.model';
@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: typeof Employee,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = await this.employeeRepository.create({
      ...createEmployeeDto,
    });
    return newEmployee;
  }

  async findAll() {
    return await this.employeeRepository.findAll({
      attributes: {
        exclude: ['proyectId', 'positionId', 'createAt'],
      },
      include: [{ model: Proyect }, { model: Position }],
    });
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
