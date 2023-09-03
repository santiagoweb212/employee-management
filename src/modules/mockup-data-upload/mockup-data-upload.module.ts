import { Module } from '@nestjs/common';
import { MockupDataUploadService } from './mockup-data-upload.service';

@Module({
  providers: [MockupDataUploadService],
})
export class MockupDataUploadModule {}
