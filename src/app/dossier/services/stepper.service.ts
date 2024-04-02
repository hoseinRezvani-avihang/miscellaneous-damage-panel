import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ObjectUtil } from 'src/app/shared/utils/object-util';
import { DossierCoreDataService } from './dossier-core-data.service';
import { DossierStep } from '../models/dossier-core.models';

@Injectable()
export class StepperService {

  constructor(
    private dossierService: DossierCoreDataService,
    private cdr: ChangeDetectorRef
  ) { }

  passStep(stepName: string, breakStep = false) {
    let dossierSteps = structuredClone(this.dossierService.$dossierSteps.value)
    let steps = ObjectUtil.flatten(dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });
    if (steps[activeStepIndex + 1]) {
      steps[activeStepIndex + 1].isActive = !breakStep;
      if (steps[activeStepIndex + 1].subStep && steps[activeStepIndex + 2]) {
        steps[activeStepIndex + 2].isActive = !breakStep;
      }
      this.dossierService.$dossierSteps.next(dossierSteps);
    }
  }

  break(stepName: string) {
    let dossierSteps = structuredClone(this.dossierService.$dossierSteps.value)
    let steps = ObjectUtil.flatten(dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    for (let i = activeStepIndex + 2; i < steps.length; i++) {
      steps[i].isActive = false;
    }

    steps[activeStepIndex + 1].isActive = false;
    this.dossierService.$dossierSteps.next(dossierSteps);
    setTimeout(() => {
      steps[activeStepIndex + 1].isActive = true;
      this.dossierService.$dossierSteps.next(dossierSteps);
      this.cdr.markForCheck();
    });
  }

  resetStep(stepName: string) {
    let dossierSteps = structuredClone(this.dossierService.$dossierSteps.value)
    let steps = ObjectUtil.flatten(dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    steps[activeStepIndex + 1].isActive = false;
    this.dossierService.$dossierSteps.next(dossierSteps);
    setTimeout(() => {
      steps[activeStepIndex + 1].isActive = true;
      this.dossierService.$dossierSteps.next(dossierSteps);
    });
  }

  isActive(stepName: string) {
    let dossierSteps = structuredClone(this.dossierService.$dossierSteps.value)
    let steps = ObjectUtil.flatten(dossierSteps, 'subStep');
    return steps.find((step) => step.name === stepName)?.isActive;
  }
}
