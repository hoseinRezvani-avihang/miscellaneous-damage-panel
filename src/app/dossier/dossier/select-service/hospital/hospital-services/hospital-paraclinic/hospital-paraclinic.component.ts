import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-hospital-paraclinic',
  templateUrl: './hospital-paraclinic.component.html',
  styleUrls: ['./hospital-paraclinic.component.css']
})
export class HospitalParaclinicComponent {

  paraclinicConfigs: HospitalCategoryConfig[] = [
    {
      title: "آزمایشگاه",
      serviceType: ServiceType.Labratoar,
      hospitalType: HospitalType.LABORATORY
    }, {
      title: "پاتوبیولوژی",
      serviceType: ServiceType.Labratoar,
      hospitalType: HospitalType.PATHOBIOLOGY
    }, {
      title: "تصویربرداری",
      serviceType: ServiceType.Imaging,
      hospitalType: HospitalType.IMAGING
    }, {
      title: "خدمات قلب",
      serviceType: ServiceType.Imaging,
      hospitalType: HospitalType.CPR
    },{
      title: "فیزیوتراپی",
      serviceType: ServiceType.Physio,
      hospitalType: HospitalType.PHYSIOTHERAPY
    },
  ]

}
