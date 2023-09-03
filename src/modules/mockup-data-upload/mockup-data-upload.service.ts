import { Injectable } from '@nestjs/common';
import { Departament } from '../departament/model/departament.model';
import { Position } from '../position/model/position.model';
import { Proyect } from '../proyect/model/proyect.model';
import {
  mockupDepartments,
  mockupPositions,
  mockupProjects,
} from './mockup.data';
@Injectable()
export class MockupDataUploadService {
  async createProyect() {
    console.log('hola esty aca mockupDataUpload');
    const newProyect = await Proyect.bulkCreate(mockupProjects);
    console.log(newProyect);
  }
  async createDepartaments() {
    const newDepartaments = await Departament.bulkCreate(mockupDepartments);
    console.log(newDepartaments);
  }
  async createPositions() {
    const newPositions = await Position.bulkCreate(mockupPositions);
    console.log('----->>', newPositions);
  }
}
