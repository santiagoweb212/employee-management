import { Departament } from './model/departament.model';

export const departamentProviders = [
  {
    provide: 'DEPARTAMENT_REPOSITORY',
    useValue: Departament,
  },
];
