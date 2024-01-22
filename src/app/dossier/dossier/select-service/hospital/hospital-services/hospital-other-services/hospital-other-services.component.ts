import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-hospital-other-services',
  templateUrl: './hospital-other-services.component.html',
  styleUrls: ['./hospital-other-services.component.css']
})
export class HospitalOtherServicesComponent {

  otherConfigs: HospitalCategoryConfig[] = [
    {
      title: "خدمات اورژانس",
      serviceType: ServiceType.Clinic
    }, {
      title: "سی پی آر",
      serviceType: ServiceType.Clinic
    }, {
      title: "سایر",
      serviceType: ServiceType.Other
    }
  ]

}
