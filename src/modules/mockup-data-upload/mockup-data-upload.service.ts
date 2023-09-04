import { Injectable } from '@nestjs/common';
import { Departament } from '../departament/model/departament.model';
import { Position } from '../position/model/position.model';
import { Proyect } from '../proyect/model/proyect.model';
import {
  mockupDepartments,
  mockupEmployees,
  mockupPositions,
  mockupProjects,
} from './mockup.data';
import { Employee } from '../employee/model/employee.model';
@Injectable()
export class MockupDataUploadService {
  async createProyect() {
    const count = await Proyect.count();
    if (count > 0) return;
    await Proyect.bulkCreate(mockupProjects);
  }
  async createDepartaments() {
    const count = await Departament.count();
    if (count > 0) return;
    await Departament.bulkCreate(mockupDepartments);
  }
  async createPositions() {
    const count = await Position.count();
    if (count > 0) return;
    await Position.bulkCreate(mockupPositions);
  }
  async createEmploye() {
    const count = await Employee.count();
    if (count > 0) return;
    console.log('aca esty');
    for (const employeeData of mockupEmployees) {
      const { name, hireDate, salary, position, project, department } =
        employeeData;

      // Busca o crea la posición, el proyecto y el departamento correspondientes
      const newPosition = await Position.findOrCreate({
        where: { title: position },
      });
      const newProject = await Proyect.findOrCreate({
        where: { title: project },
      });
      const newDepartment = await Departament.findOrCreate({
        where: { title: department },
      });

      // Crea el empleado y lo asocia con la posición, el proyecto y el departamento
      console.log({
        PositionId: newPosition[0].id,
        ProjectId: newProject[0].id,
        DepartmentId: newDepartment[0].id,
      });
      await Employee.create({
        name,
        hireDate,
        salary,
        positionId: newPosition[0].id,
        proyectId: newProject[0].id,
        departamentId: newDepartment[0].id,
      });
    }
  }
}
