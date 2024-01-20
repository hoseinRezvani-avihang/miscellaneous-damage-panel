import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-other-services',
  templateUrl: './hospital-other-services.component.html',
  styleUrls: ['./hospital-other-services.component.css']
})
export class HospitalOtherServicesComponent {

  otherConfigs: HospitalCategoryConfig[] = [
    {
      title: "خدمات اورژانس"
    }, {
      title: "سی پی آر"
    }, {
      title: "سایر"
    }
  ]

}
