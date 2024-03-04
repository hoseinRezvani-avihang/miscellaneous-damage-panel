import { Component, Input, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../services/dossier-core-data.service';
import { DossierSubsService } from './select-service/services/dossier-subs.service';
import { PartnerType, SelectPartner } from '../models/partner.models';
import { HospitalService } from './select-service/hospital/services/hospital.service';
import { DossierConfig } from '../models/dossier-core.models';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css'],
  providers: [
    DossierCoreDataService,
    DossierSubsService,
    HospitalService
  ],
})
export class DossierComponent implements OnInit {

  memberInfo = this.dossierCoreService.citizenInfo.asObservable();
  partnerInfo = this.dossierCoreService.partnerInfo.asObservable();
  hospitalSelected = false;

  @Input() config!: DossierConfig;

  constructor(
    private dossierCoreService: DossierCoreDataService
  ) { }

  ngOnInit(): void {
    this.partnerInfo.subscribe((info: SelectPartner | null) => {
      this.hospitalSelected = info?.partnerType === PartnerType.HOSPITAL.symbol;
    });

    this.setDossierConfig();
  }

  isActive(stepName: string) {
    return this.dossierCoreService.isActive(stepName);
  }

  setDossierConfig() {
    this.dossierCoreService.config.next(this.config);
  }

}
