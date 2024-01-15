import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CpartyInfo, CpartyInfoUI } from '../../models/cparty.models';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-cparty',
  templateUrl: './select-cparty.component.html',
  styleUrls: ['./select-cparty.component.css']
})
export class SelectCpartyComponent implements OnInit, OnDestroy {

  $cpartyInfo = this.dossierService.cpartyInfo.asObservable();
  cpartyInfoSubscription!: Subscription;
  cparty!: CpartyInfoUI;
  @Input() editting = true;

  constructor(
    private dossierService: DossierCoreDataService
  ) {}

  ngOnInit(): void {
    this.onUpdateCparty();
  }

  onUpdateCparty() {
    this.cpartyInfoSubscription = this.$cpartyInfo.subscribe((cpartyInfo: CpartyInfo | null) => {
      if (cpartyInfo) {
        this.cparty = {
          fullName: cpartyInfo.cparty.fullName,
          noMedicalSystem: cpartyInfo.cparty.certificate?.[0]?.noMedicalSystem,
          address: cpartyInfo.cparty.partnerInfo.address,
          serviceDate: cpartyInfo.serviceDate,
          image: cpartyInfo.cparty.image
        }
      }
    })
  }

  selectCparty(cparty: CpartyInfo) {
    this.dossierService.setCpartyInfo(cparty);
    this.editting = false;
    this.dossierService.break("selectCparty");
  }

  ngOnDestroy(): void {
    this.cpartyInfoSubscription.unsubscribe();
    this.dossierService.setCpartyInfo(null);
  }

}
