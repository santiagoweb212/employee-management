import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, SEQUELIZE } from './constants';
import { dbConfig } from './db.config';
import { Employee } from 'src/modules/employee/model/employee.model';
import { Proyect } from 'src/modules/proyect/model/proyect.model';
import { Departament } from 'src/modules/departament/model/departament.model';
import { Position } from 'src/modules/position/model/position.model';

export const dbProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: any;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = dbConfig.development;
          break;
        default:
          config = dbConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Employee, Proyect, Departament, Position]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
