import { Component, Input } from '@angular/core';
import { Bed } from '../../../../models/Bed.models';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-bed',
  templateUrl: './select-bed.component.html',
  styleUrls: ['./select-bed.component.css']
})
export class SelectBedComponent {

  @Input() form!: FormArray;

  beds = Bed.beds;

  getControl(bed: AbstractControl) {
    return bed.get("selected") as FormControl;
  }

  getBedName(bed: AbstractControl) {
    return (bed.get("bed")?.value as Bed).name;
  }

}
