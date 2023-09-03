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
  createProyect() {
    console.log('hola esty aca mockupDataUpload');
  }
}
