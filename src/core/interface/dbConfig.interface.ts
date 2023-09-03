export interface IDatabaseConfigAttributes {
  database?: string;
  username?: string;
  password?: string;
  host?: string;
  dialect?: string;
}
export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
}
