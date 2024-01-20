import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Bed } from '../models/Bed.models';

@Injectable()
export class HospitalService {

  bedFormControls = Bed.beds.map((bed: Bed) => {
    return new FormGroup({
      bed: new FormControl(bed),
      selected: new FormControl(false),
      disabled: new FormControl(true),
      nursingCare: new FormControl(false),
      nursingService: new FormControl(true),
      payAmount: new FormControl(0),
      cnt: new FormControl(1),
    })
  })
  bedForm = new FormArray([
    ...this.bedFormControls
  ])

  constructor() { }
}
