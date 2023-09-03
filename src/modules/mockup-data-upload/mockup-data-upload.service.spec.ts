import { Test, TestingModule } from '@nestjs/testing';
import { MockupDataUploadService } from './mockup-data-upload.service';

describe('MockupDataUploadService', () => {
  let service: MockupDataUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockupDataUploadService],
    }).compile();

    service = module.get<MockupDataUploadService>(MockupDataUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
