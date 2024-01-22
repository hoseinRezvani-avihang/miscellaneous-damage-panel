import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-hospital-drug-equipment',
  templateUrl: './hospital-drug-equipment.component.html',
  styleUrls: ['./hospital-drug-equipment.component.css']
})
export class HospitalDrugEquipmentComponent {

  drugEuipmentConfigs: HospitalCategoryConfig[] = [
    {
      title: "دارو",
      serviceType: ServiceType.Pharmacy,
      hospitalType: HospitalType.DRUG
    }, {
      title: "لوازم بهداشتی",
      serviceType: ServiceType.Equipment,
      hospitalType: HospitalType.COSMETICS
    }, {
      title: "لوازم مصرفی",
      serviceType: ServiceType.Equipment,
      hospitalType: HospitalType.CONSUMABLES
    }, {
      title: "تجهیزات",
      serviceType: ServiceType.Equipment,
      hospitalType: HospitalType.EQUIPMENT
    },
  ]

}
