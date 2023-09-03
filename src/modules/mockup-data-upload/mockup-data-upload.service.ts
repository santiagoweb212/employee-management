import { Injectable } from '@nestjs/common';
import { Departament } from '../departament/model/departament.model';
import { Proyect } from '../proyect/model/proyect.model';
import { Position } from '../position/model/position.model';
import {
  mockupProjects,
  mockupDepartments,
  mockupPositions,
} from './mockup.data';
@Injectable()
export class MockupDataUploadService {
  constructor(private readonly proyectModel: typeof Proyect) {}
  async createProyect() {
    console.log('hola esty aca mockupDataUpload');
    const newProyect = await this.proyectModel.bulkCreate(mockupProjects);
    console.log(newProyect);
  }
  async createDepartaments() {
    /* const newDepartaments = await Departament.bulkCreate(mockupDepartments);
    console.log(newDepartaments); */
  }
  async createPositions() {
    /* const newPositions = await Position.bulkCreate(mockupPositions);
    console.log(newPositions); */
  }
}
