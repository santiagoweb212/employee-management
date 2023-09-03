import { ConfigModule, ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from './interface/dbConfig.interface';

ConfigModule.forRoot({
  envFilePath: `.env`,
});

const configService = new ConfigService();

export const dbConfig: IDatabaseConfig = {
  development: {
    database: configService.get('DB_NAME'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    host: configService.get('DB_HOST'),
    dialect: configService.get('DB_DIALECT'),
  },
};
