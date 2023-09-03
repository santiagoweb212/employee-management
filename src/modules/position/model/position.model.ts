import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table
export class Position extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
