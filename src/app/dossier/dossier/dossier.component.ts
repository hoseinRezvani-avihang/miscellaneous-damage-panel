import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../services/dossier-core-data.service';
import { DossierSubsService } from './select-service/services/dossier-subs.service';
import { PartnerType, SelectPartner } from '../models/partner.models';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css'],
  providers: [
    DossierCoreDataService,
    DossierSubsService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DossierComponent implements OnInit {

  memberInfo = this.dossierCoreService.citizenInfo.asObservable();
  partnerInfo = this.dossierCoreService.partnerInfo.asObservable();
  hospitalSelected = false;



  constructor(
    private dossierCoreService: DossierCoreDataService
  ) {}

  ngOnInit(): void {
      this.partnerInfo.subscribe((info: SelectPartner | null) => {
        this.hospitalSelected = info?.partnerType === PartnerType.HOSPITAL.symbol;
      })
  }

  isActive(stepName: string) {
    return this.dossierCoreService.isActive(stepName);
  }

}
