import { Component } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-visit-services',
  templateUrl: './visit-services.component.html',
  styleUrls: ['./visit-services.component.css']
})
export class VisitServicesComponent {

  visitForm = this.hospitalService.visitForm;

  constructor(
    private hospitalService: HospitalService
  ) {}

  selectedVisit(visit: FormArray) {
    return visit.controls.filter((control: AbstractControl) => {
      return control.get("selected")?.value;
    })
  }
}
