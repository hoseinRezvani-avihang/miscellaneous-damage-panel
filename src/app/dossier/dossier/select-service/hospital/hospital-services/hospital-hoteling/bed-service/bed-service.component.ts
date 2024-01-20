import { Component } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bed-service',
  templateUrl: './bed-service.component.html',
  styleUrls: ['./bed-service.component.css']
})
export class BedServiceComponent {

  bedForm = this.hospitalService.bedForm;

  constructor(
    private hospitalService: HospitalService
  ) {}

  selectedBeds(beds: FormArray) {
    return beds.controls.filter((control: AbstractControl) => {
      return control.get("selected")?.value;
    })
  }

}
