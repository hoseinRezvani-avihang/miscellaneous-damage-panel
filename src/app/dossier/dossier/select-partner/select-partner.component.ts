import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PartnerInfo, PartnerInfoUI, PartnerType, SelectPartner } from '../../models/partner.models';
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
          partnerName: partnerInfo.partner.partnerName, 
          address: partnerInfo.partner.address, 
          hasContract: partnerInfo.partner.hasContract, 
          delivererType: PartnerType.getParnterNameBYSymbol(partnerInfo.partner.delivererType).name,
          image: partnerInfo.partner.image,
          nationalNumber: partnerInfo.partner.nationalNumber,
          serviceDate: partnerInfo.serviceDate
        }
      }
    })
  }

  onSelectPartner(partner: SelectPartner) {
    this.editing = false;
    this.dossierDataService.setPartnerInfo(partner);
    // this.dossierDataService.break("selectPartner");
    setTimeout(() => {
      // this.dossierDataService.resetStep("selectPartner")
    })
    this.dossierDataService.passStep("selectPartner");
  }

  ngOnDestroy(): void {
    this.partnerInfoSubscription.unsubscribe();
    this.dossierDataService.setPartnerInfo(null);
  }
}
