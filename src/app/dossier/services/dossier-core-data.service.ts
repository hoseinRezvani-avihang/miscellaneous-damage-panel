import { Injectable } from '@angular/core';
import { CitizenResult } from '../models/citizen.models';
import { BehaviorSubject } from 'rxjs';
import { DossierStep } from '../models/dossier-core.models';
import { ObjectUtil } from 'src/app/shared/utils/object-util';
import { SelectPartner } from '../models/partner.models';

@Injectable({
  providedIn: 'root',
})
export class DossierCoreDataService {

  constructor() {}

  // ============= save dossier navigation ===========

  private dossierSteps: DossierStep[] = [
    {
      name: 'selectMember',
      isActive: true,
      exist: true,
    },
    {
      name: 'saveDossier',
      isActive: false,
      exist: true,
      subStep: [
        {
          name: 'selectPartner',
          isActive: false,
          exist: true,
        },
        {
          name: 'selectCparty',
          isActive: false,
          exist: true,
        },
        {
          name: 'selectService',
          isActive: false,
          exist: true,
        },
      ],
    },
  ];

  $dossierSteps = new BehaviorSubject<any>(this.dossierSteps);

  next() {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    let activeStepIndex = steps.map((step) => step.isActive).lastIndexOf(true);
    if (steps[activeStepIndex + 1]) {
      steps[activeStepIndex + 1].isActive = true;
      if (steps[activeStepIndex + 1].subStep && steps[activeStepIndex + 2]) {
        steps[activeStepIndex + 2].isActive = true;
      }
      this.$dossierSteps.next(this.dossierSteps);
    }
  }

  isActive(stepName: string) {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    return steps.find((step) => step.name === stepName)?.isActive;
  }
  // ================== member info ================

  citizenInfo = new BehaviorSubject<CitizenResult | null>(null);
  
  setCitizenInfo(citizenInfo: CitizenResult) {
    this.citizenInfo.next(citizenInfo);
  }
  


  // ================== parnter info ================

  partnerInfo = new BehaviorSubject<SelectPartner>({} as SelectPartner);

  setPartnerInfo(selectPartner: SelectPartner) {
    this.partnerInfo.next(selectPartner);
  }

  // =================================================
  // =================================================
}
