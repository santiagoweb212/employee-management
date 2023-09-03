import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
import { Employee } from './model/employee.model';

export const employeeProviders = [
  {
    provide: EMPLOYEE_REPOSITORY,
    useValue: Employee,
  },
];
