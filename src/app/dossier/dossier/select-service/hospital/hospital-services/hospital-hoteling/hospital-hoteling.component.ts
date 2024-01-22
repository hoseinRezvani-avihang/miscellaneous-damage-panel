import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-hospital-hoteling',
  templateUrl: './hospital-hoteling.component.html',
  styleUrls: ['./hospital-hoteling.component.css']
})
export class HospitalHotelingComponent {

  hospitalCareConfigs: HospitalCategoryConfig[] = [
    {
      title: "مراقبت پرستاری",
      serviceType: ServiceType.Clinic,
      hospitalType: HospitalType.NURSINGCARE
    }, {
      title: "خدمت پرستاری",
      serviceType: ServiceType.Clinic,
      hospitalType: HospitalType.NURSINGSERVICES
    }
  ]

  hotelingConfig: HospitalCategoryConfig = {
    title: "تخت",
    serviceType: ServiceType.SRVC
  }

}
