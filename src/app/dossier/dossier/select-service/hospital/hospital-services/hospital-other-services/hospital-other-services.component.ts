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
      type: HospitalService.emergencyServices
    }, {
      title: "سی پی آر",
      type: HospitalService.cpr
    }, {
      title: "سایر",
      type: HospitalService.other
    }
  ]

}
