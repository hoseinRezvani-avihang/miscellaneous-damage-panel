import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Bed } from '../models/Bed.models';
import { Visit } from '../models/Visit.models';
import { HospitalServiceSymbol, HospitalSubs } from '../models/Hospital-services.model';
import { SharedForm, Subs } from 'src/app/dossier/models/service.models';

@Injectable(
  {
    providedIn: "root"
  }
)
export class HospitalService {

  constructor() { }


  // ================== beds service ==================

  bedFormControls = Bed.beds.map((bed: Bed) => {
    return new FormGroup({
      bed: new FormControl(bed),
      selected: new FormControl(false),
      disabled: new FormControl(true),
      nursingCare: new FormControl(false),
      nursingService: new FormControl(true),
      payAmount: new FormControl(null),
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
      payAmount: new FormControl(null)
    })
  });
  visitForm = new FormArray([
    ...this.visitFormControls
  ])

  // ================== visit service ==================

  hospitalSubs: HospitalSubs = {
    doctorServices: {
      [HospitalServiceSymbol.visitInWard]: [] as Subs[],
      [HospitalServiceSymbol.surgeon]: [] as Subs[],
      [HospitalServiceSymbol.consultingInWarded]: [] as Subs[],
      [HospitalServiceSymbol.hospitalDental]: [] as Subs[],
    },
    drugAndEquipServices: {
      [HospitalServiceSymbol.drug]: [] as Subs[],
      [HospitalServiceSymbol.cosmetics]: [] as Subs[],
      [HospitalServiceSymbol.consumables]: [] as Subs[],
      [HospitalServiceSymbol.equipment]: [] as Subs[],
    },
    paraclinicServices: {
      [HospitalServiceSymbol.laboratory]: [] as Subs[],
      [HospitalServiceSymbol.pathobiology]: [] as Subs[],
      [HospitalServiceSymbol.imaging]: [] as Subs[],
      [HospitalServiceSymbol.echo]: [] as Subs[],
      [HospitalServiceSymbol.physiotherapy]: [] as Subs[],
    },
    hotelingServices: {
      [HospitalServiceSymbol.nursingCare]: [] as Subs[],
      [HospitalServiceSymbol.nursingServices]: [] as Subs[],
      [HospitalServiceSymbol.bed]: [] as Subs[],
    },
    otherServices: {
      [HospitalServiceSymbol.emergencyServices]: [] as Subs[],
      [HospitalServiceSymbol.cpr]: [] as Subs[],
      [HospitalServiceSymbol.other]: [] as Subs[],

    }
  };

}
