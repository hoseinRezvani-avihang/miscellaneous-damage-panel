import { TestBed } from '@angular/core/testing';

import { HttpDossierService } from './http-dossier.service';

describe('HttpDossierService', () => {
  let service: HttpDossierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDossierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
