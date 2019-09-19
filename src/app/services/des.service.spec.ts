import { TestBed } from '@angular/core/testing';

import { DESService } from './des.service';

describe('DESService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DESService = TestBed.get(DESService);
    expect(service).toBeTruthy();
  });
});
