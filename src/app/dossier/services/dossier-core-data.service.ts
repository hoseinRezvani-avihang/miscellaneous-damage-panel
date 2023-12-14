import { ChangeDetectorRef, Injectable } from '@angular/core';
import { CitizenResult } from '../models/citizen.models';
import { BehaviorSubject } from 'rxjs';
import { DossierStep } from '../models/dossier-core.models';
import { ObjectUtil } from 'src/app/shared/utils/object-util';
import { PartnerInfo, SelectPartner } from '../models/partner.models';
import { CpartyInfo } from '../models/cparty.models';

@Injectable({
  providedIn: 'root',
})
export class DossierCoreDataService {
  constructor(private cdr: ChangeDetectorRef) {}

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

  passStep(stepName: string) {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });
    if (steps[activeStepIndex + 1]) {
      steps[activeStepIndex + 1].isActive = true;
      if (steps[activeStepIndex + 1].subStep && steps[activeStepIndex + 2]) {
        steps[activeStepIndex + 2].isActive = true;
      }
      this.$dossierSteps.next(this.dossierSteps);
    }
  }

  break(stepName: string) {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    for (let i = activeStepIndex + 2; i < steps.length; i++) {
      steps[i].isActive = false;
    }

    steps[activeStepIndex + 1].isActive = true;
    setTimeout(() => {
      this.$dossierSteps.next(this.dossierSteps);
      // this.resetStep(stepName);
    }, 1);
  }

  resetStep(stepName: string) {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    steps[activeStepIndex + 1].isActive = false;
    this.$dossierSteps.next(this.dossierSteps);
    setTimeout(() => {
      steps[activeStepIndex + 1].isActive = true;
      this.$dossierSteps.next(this.dossierSteps);
    });
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

  partnerInfo = new BehaviorSubject<SelectPartner | null>(null);

  setPartnerInfo(selectPartner: SelectPartner | null) {
    this.partnerInfo.next(selectPartner);
  }

  // ================== cparty info ================

  cpartyInfo = new BehaviorSubject<CpartyInfo | null>(null);

  setCpartyInfo(cpartyInfo: CpartyInfo | null) {
    this.cpartyInfo.next(cpartyInfo);
  }

  // =================================================
  // =================================================
}
