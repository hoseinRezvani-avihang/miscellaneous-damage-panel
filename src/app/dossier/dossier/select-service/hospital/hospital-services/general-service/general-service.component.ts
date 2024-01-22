import { Component, Input } from '@angular/core';
import { GeneralServiceConfig, HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-general-service',
  templateUrl: './general-service.component.html',
  styleUrls: ['./general-service.component.css']
})
export class GeneralServiceComponent {

  @Input() config!: HospitalCategoryConfig;

  generalServiceConfig() {
    return {
      serviceType: this.config.serviceType
    } as GeneralServiceConfig;
  }

}
