import { Injectable } from '@angular/core';
import { CitizenResult } from '../models/citizen.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierCoreDataService {

  citizenInfo = new BehaviorSubject<CitizenResult | null>(null);

  constructor() { }

  // ============= save dossier navigation ===========

  private dossierSteps = [
    {
      name: "selectMember", 
      isActive: true,
    }, 
    {
      name: "selectPartner", 
      isActive: false,
    }, 
    {
      name: "selectCparty", 
      isActive: false,
    }, 
    {
      name: "selectService", 
      isActive: false,
    },   
  ];

  $dossierSteps = new BehaviorSubject<any>(this.dossierSteps);
  
  next() {
      let activeStepIndex = this.dossierSteps.map(step => step.isActive).lastIndexOf(true);
      if (this.dossierSteps[activeStepIndex + 1]) {
        this.dossierSteps[activeStepIndex + 1].isActive = true;
        this.$dossierSteps.next(this.dossierSteps);
      }
  }

  isActive(stepName: string) {
    return this.dossierSteps.find(step => step.name === stepName)?.isActive;
  }
  // ================== select member ================

    setCitizenInfo(citizenInfo: CitizenResult) {
      this.citizenInfo.next(citizenInfo);
    }

  // =================================================
  // =================================================
}
