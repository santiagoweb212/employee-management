import { Proyect } from './model/proyect.model';

export const projectProvider = [
  {
    provide: 'PROJECT_REPOSITORY',
    useValue: Proyect,
  },
];
