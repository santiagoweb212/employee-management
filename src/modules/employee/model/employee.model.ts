import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Position } from '../../position/model/position.model';
import { Departament } from '../../departament/model/departament.model';
import { Proyect } from '../../proyect/model/proyect.model';

@Table
export class Employee extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  hireDate: Date;
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  salary: number;
  @Column({
    type: DataType.INTEGER,
  })
  positionId: number;
  @Column({
    type: DataType.INTEGER,
  })
  departamentId: number;
  @Column({
    type: DataType.INTEGER,
  })
  proyectId: number;
  @BelongsTo(() => Position, 'positionId')
  position: Position;
  @BelongsTo(() => Departament, 'departamentId')
  departament: Departament;
  @BelongsTo(() => Proyect, 'proyectId')
  proyect: Proyect;
}
