import { Injectable } from '@angular/core';
import { HttpDossierService } from 'src/app/dossier/services/http-dossier.service';

@Injectable({
  providedIn: 'root'
})
export class CpartyService {

  constructor(
    private dossierHttpService: HttpDossierService
  ) { }

  searchCparty(noMedicalSystem: string) {
    return this.dossierHttpService.searchCparty(noMedicalSystem);
  }
}
