import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Bed } from '../models/Bed.models';
import { Visit } from '../models/Visit.models';

@Injectable()
export class HospitalService {

  // ================== beds service ==================

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
  });
  bedForm = new FormArray([
    ...this.bedFormControls
  ]);

  // ================== visit service ==================

  visitFormControls = Visit.visits.map((visit: Visit) => {
    return new FormGroup({
      visit: new FormControl(visit),
      selected: new FormControl(false),
      disabled: new FormControl(false),
      cnt: new FormControl(1),
      payAmount: new FormControl(0)
    })
  });
  visitForm = new FormArray([
    ...this.visitFormControls
  ])


  constructor() { }
}
