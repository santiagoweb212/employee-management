import { POSITION_REPOSITORY } from 'src/core/constants';
import { Position } from './model/position.model';

export const positionProviders = [
  {
    provide: POSITION_REPOSITORY,
    useValue: Position,
  },
];
