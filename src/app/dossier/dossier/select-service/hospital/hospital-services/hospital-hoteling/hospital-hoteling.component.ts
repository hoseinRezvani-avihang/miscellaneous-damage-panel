import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalService } from '../../models/Hospital-services.model';

@Component({
  selector: 'app-hospital-hoteling',
  templateUrl: './hospital-hoteling.component.html',
  styleUrls: ['./hospital-hoteling.component.css']
})
export class HospitalHotelingComponent {

  hospitalCareConfigs: HospitalCategoryConfig[] = [
    {
      title: "مراقبت پرستاری",
      serviceType: HospitalService.nursingCare.serviceType,
      hospitalType: HospitalService.nursingCare.hospitalType
    }, {
      title: "خدمت پرستاری",
      serviceType: HospitalService.nursingServices.serviceType,
      hospitalType: HospitalService.nursingServices.hospitalType
    }
  ]

  hotelingConfig: HospitalCategoryConfig = {
    title: "تخت",
    serviceType: HospitalService.bed.serviceType
  }

}
