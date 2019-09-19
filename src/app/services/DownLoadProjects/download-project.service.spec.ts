import { TestBed } from '@angular/core/testing';

import { DownloadProjectService } from './download-project.service';

describe('DownloadProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadProjectService = TestBed.get(DownloadProjectService);
    expect(service).toBeTruthy();
  });
});
