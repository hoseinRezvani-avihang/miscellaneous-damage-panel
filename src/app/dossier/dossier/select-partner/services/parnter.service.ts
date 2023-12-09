import { Injectable } from '@angular/core';
import { SearchPartnerInput } from 'src/app/dossier/models/partner.models';
import { HttpDossierService } from 'src/app/dossier/services/http-dossier.service';

@Injectable({
  providedIn: 'root'
})
export class ParnterService {

  constructor(
    private httpDossierService: HttpDossierService
  ) { }

  searchParnter(input: SearchPartnerInput) {
    return this.httpDossierService.searchParnter(input);
  }

  fetchMemberInfo(partnerId: string) {
    return this.httpDossierService.fetchPartnerInfo(partnerId);
  }
}
