import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-drug-equipment',
  templateUrl: './hospital-drug-equipment.component.html',
  styleUrls: ['./hospital-drug-equipment.component.css']
})
export class HospitalDrugEquipmentComponent {

  drugEuipmentConfigs: HospitalCategoryConfig[] = [
    {
      title: "دارو"
    }, {
      title: "لوازم بهداشتی"
    }, {
      title: "لوازم مصرفی"
    }, {
      title: "تجهیزات"
    },
  ]

}
