import { Injectable } from '@angular/core';
import { SearchServiceInput } from 'src/app/dossier/models/service.models';
import { HttpDossierService } from 'src/app/dossier/services/http-dossier.service';

@Injectable({
  providedIn: 'root',
})
export class DossierSubsService {
  constructor(private dossierHttpService: HttpDossierService) {}

  searchService(input: SearchServiceInput) {
    return this.dossierHttpService.searchService(input);
  };
}
