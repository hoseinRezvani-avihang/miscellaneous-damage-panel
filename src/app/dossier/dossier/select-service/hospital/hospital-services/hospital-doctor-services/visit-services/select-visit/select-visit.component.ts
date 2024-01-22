import { Component, Input } from '@angular/core';
import { Visit } from '../../../../models/Visit.models';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-visit',
  templateUrl: './select-visit.component.html',
  styleUrls: ['./select-visit.component.css']
})
export class SelectVisitComponent {

  @Input() form!: FormArray;

  getControl(bed: AbstractControl) {
    return bed.get("selected") as FormControl;
  }

  getVisitName(bed: AbstractControl) {
    return (bed.get("visit")?.value as Visit).name;
  }

}
