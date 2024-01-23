import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalService } from '../../models/Hospital-services.model';

@Component({
  selector: 'app-hospital-other-services',
  templateUrl: './hospital-other-services.component.html',
  styleUrls: ['./hospital-other-services.component.css']
})
export class HospitalOtherServicesComponent {

  otherConfigs: HospitalCategoryConfig[] = [
    {
      title: "خدمات اورژانس",
      serviceType: HospitalService.emergencyServices.serviceType,
      hospitalType: HospitalService.emergencyServices.hospitalType
    }, {
      title: "سی پی آر",
      serviceType: HospitalService.cpr.serviceType,
      hospitalType: HospitalService.cpr.hospitalType
    }, {
      title: "سایر",
      serviceType: HospitalService.other.serviceType,
      hospitalType: HospitalService.other.hospitalType
    }
  ]

}
