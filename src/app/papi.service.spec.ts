import { TestBed } from '@angular/core/testing';

import { PapiService } from './papi.service';

describe('PapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PapiService = TestBed.get(PapiService);
    expect(service).toBeTruthy();
  });
});
