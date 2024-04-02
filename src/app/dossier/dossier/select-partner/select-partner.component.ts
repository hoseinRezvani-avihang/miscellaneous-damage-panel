import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PartnerInfo, PartnerInfoUI, PartnerType, SearchPartnerConfig, SelectPartner } from '../../models/partner.models';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-partner',
  templateUrl: './select-partner.component.html',
  styleUrls: ['./select-partner.component.css']
})
export class SelectPartnerComponent implements OnInit, OnDestroy {

  constructor(
    private dossierDataService: DossierCoreDataService,
  ) {};

  @Input() editing = true;
  @Input() partner!: PartnerInfoUI;

  partnerInfo = this.dossierDataService.partnerInfo.asObservable();
  partnerInfoSubscription!: Subscription;

  ngOnInit(): void {
    this.onPartnerUpdate();
  }

  onPartnerUpdate() {
    this.partnerInfoSubscription = this.partnerInfo.subscribe((partnerInfo: SelectPartner | null) => {
      if (partnerInfo) {
        this.partner = {
          partnerName: partnerInfo.partner.partnerInfo.partnerName,
          address: partnerInfo.partner.partnerInfo.address,
          hasContract: partnerInfo.partner.partnerInfo.hasContract,
          delivererType: PartnerType.getParnterBYSymbol(partnerInfo.partner.partnerInfo.delivererType).name,
          image: partnerInfo.partner.partnerInfo.image,
          nationalNumber: partnerInfo.partner.partnerInfo.nationalNumber,
          serviceDate: partnerInfo.serviceDate
        }
      }
    })
  }

  onSelectPartner(partner: SelectPartner) {
    this.editing = false;
    this.dossierDataService.setPartnerInfo(partner);
    this.dossierDataService.break("selectPartner");
  }

  ngOnDestroy(): void {
    this.partnerInfoSubscription.unsubscribe();
    this.dossierDataService.setPartnerInfo(null);
  }

  get parnterSearchConfig() {
    return {
      isContracted: this.dossierDataService.config.value.isContracted,
    } as SearchPartnerConfig;
  }
}
