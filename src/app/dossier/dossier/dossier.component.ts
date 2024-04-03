import { Component, Input, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../services/dossier-core-data.service';
import { DossierSubsService } from './select-service/services/dossier-subs.service';
import { PartnerType, SelectPartner } from '../models/partner.models';
import { HospitalService } from './select-service/hospital/services/hospital.service';
import { DossierConfig } from '../models/dossier-core.models';
import { StepperService } from '../services/stepper.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css'],
  providers: [
    DossierCoreDataService,
    DossierSubsService,
    HospitalService,
    StepperService,
    SubscriptionService
  ],
})
export class DossierComponent implements OnInit {

  memberInfo = this.dossierCoreService.citizenInfo.asObservable();
  partnerInfo = this.dossierCoreService.partnerInfo.asObservable();
  hospitalSelected = false;

  @Input() config!: DossierConfig;

  constructor(
    private dossierCoreService: DossierCoreDataService,
    private stepperService: StepperService
  ) { }

  ngOnInit(): void {
    this.partnerInfo.subscribe((info: SelectPartner | null) => {
      this.hospitalSelected = info?.partnerType === PartnerType.HOSPITAL.symbol;
    });

    this.setDossierConfig();
  }

  isActive(stepName: string) {
    return this.stepperService.isActive(stepName);
  }

  setDossierConfig() {
    this.dossierCoreService.config.next(this.config);
  }

}
