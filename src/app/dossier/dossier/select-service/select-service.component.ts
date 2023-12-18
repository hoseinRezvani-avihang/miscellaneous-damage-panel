import { Component, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import {
  CPartiesInfo,
  PartnerInfo,
  PartnerType,
  PartnerTypeEnum,
  SelectPartner,
} from '../../models/partner.models';
import { CpartyInfo } from '../../models/cparty.models';
import { OutpatientServiceInput } from '../../models/service.models';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.css'],
})
export class SelectServiceComponent implements OnInit {
  parnterInfo = this.dossierService.partnerInfo.asObservable();
  cpartyInfo = this.dossierService.cpartyInfo.asObservable();

  outpatientServiceInput!: OutpatientServiceInput;

  constructor(private dossierService: DossierCoreDataService) {}

  ngOnInit(): void {
    this.onOutpatientServiceInput();
  }

  onOutpatientServiceInput() {
    this.parnterInfo.subscribe((parnterInfo: SelectPartner | null) => {
      if (parnterInfo) {
        this.outpatientServiceInput = {
          cparties: parnterInfo.partner.cPartiesInfo.map(
            (value: CPartiesInfo) => ({ name: value.fullName, id: value.id })
          ),
        };
      }
    });
  }

  getName(symbol: PartnerTypeEnum) {
    return PartnerType.getParnterNameBYSymbol(symbol).name;
  }
}
