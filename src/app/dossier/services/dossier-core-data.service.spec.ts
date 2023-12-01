import { TestBed } from '@angular/core/testing';

import { DossierCoreDataService } from './dossier-core-data.service';

describe('DossierCoreDataService', () => {
  let service: DossierCoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierCoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
