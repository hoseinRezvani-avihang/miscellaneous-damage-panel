import { TestBed } from '@angular/core/testing';

import { ParnterService } from './parnter.service';

describe('ParnterService', () => {
  let service: ParnterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParnterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
