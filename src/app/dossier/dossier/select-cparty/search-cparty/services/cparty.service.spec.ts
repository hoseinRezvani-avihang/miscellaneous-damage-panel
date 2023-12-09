import { TestBed } from '@angular/core/testing';

import { CpartyService } from './cparty.service';

describe('CpartyService', () => {
  let service: CpartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
