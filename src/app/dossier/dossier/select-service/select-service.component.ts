import { Component } from '@angular/core';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import { PartnerType, PartnerTypeEnum } from '../../models/partner.models';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.css']
})
export class SelectServiceComponent {

  parnterInfo = this.dossierService.partnerInfo.asObservable();

  constructor(
    private dossierService: DossierCoreDataService
  ) {};

  getName(symbol: PartnerTypeEnum) {
    return PartnerType.getParnterNameBYSymbol(symbol).name
  }
}
