import { Component, Input } from '@angular/core';
import { SelectPartner } from '../../models/partner.models';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';

@Component({
  selector: 'app-select-partner',
  templateUrl: './select-partner.component.html',
  styleUrls: ['./select-partner.component.css']
})
export class SelectPartnerComponent {

  constructor(
    private dossierDataService: DossierCoreDataService,
  ) {};

  @Input() editing = true;

  partnerInfo = this.dossierDataService.partnerInfo.asObservable();

  onSelectPartner(partner: SelectPartner) {
    this.editing = false;
    this.dossierDataService.setPartnerInfo(partner);
    this.dossierDataService.next();
  }
}
