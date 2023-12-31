import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MockupDataUploadService } from './modules/mockup-data-upload/mockup-data-upload.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const mockupService = app.get(MockupDataUploadService);
  await Promise.all([
    mockupService.createProyect(),
    mockupService.createDepartaments(),
    mockupService.createPositions(),
    mockupService.createEmploye(),
  ]);
  await app.listen(3000);
}

bootstrap();
