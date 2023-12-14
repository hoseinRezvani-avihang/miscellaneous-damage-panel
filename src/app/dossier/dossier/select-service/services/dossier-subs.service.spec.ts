import { TestBed } from '@angular/core/testing';

import { DossierSubsService } from './dossier-subs.service';

describe('DossierSubsService', () => {
  let service: DossierSubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierSubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
