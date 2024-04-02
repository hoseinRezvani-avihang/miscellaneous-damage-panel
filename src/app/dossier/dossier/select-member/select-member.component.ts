import { Component } from '@angular/core';
import { CitizenResult } from '../../models/citizen.models';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-select-member',
  templateUrl: './select-member.component.html',
  styleUrls: ['./select-member.component.css']
})
export class SelectMemberComponent {

  constructor(
    private dossierCoreService: DossierCoreDataService,
    private stepperService: StepperService
  ) {}

  selectMember(memberResult: CitizenResult) {
    this.dossierCoreService.setCitizenInfo(memberResult);
    this.stepperService.passStep("selectMember");
  }

}
