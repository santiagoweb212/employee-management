import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MockupDataUploadService } from './modules/mockup-data-upload/mockup-data-upload.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mockupService = app.get(MockupDataUploadService);
  await mockupService.createProyect();
  await mockupService.createDepartaments();
  await app.listen(3000);
}
bootstrap();
