import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalService } from '../../models/Hospital-services.model';

@Component({
  selector: 'app-hospital-drug-equipment',
  templateUrl: './hospital-drug-equipment.component.html',
  styleUrls: ['./hospital-drug-equipment.component.css']
})
export class HospitalDrugEquipmentComponent {

  drugEuipmentConfigs: HospitalCategoryConfig[] = [
    {
      title: "دارو",
      type: HospitalService.drug
    }, {
      title: "لوازم بهداشتی",
      type: HospitalService.cosmetics
    }, {
      title: "لوازم مصرفی",
      type: HospitalService.consumables
    }, {
      title: "تجهیزات",
      type: HospitalService.equipment
    },
  ]

}
