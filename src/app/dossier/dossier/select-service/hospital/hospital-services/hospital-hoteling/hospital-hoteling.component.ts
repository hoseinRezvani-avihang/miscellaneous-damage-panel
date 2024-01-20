import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-hoteling',
  templateUrl: './hospital-hoteling.component.html',
  styleUrls: ['./hospital-hoteling.component.css']
})
export class HospitalHotelingComponent {

  hospitalCareConfigs: HospitalCategoryConfig[] = [
    {
      title: "مراقبت پرستاری"
    }, {
      title: "خدمت پرستاری"
    }
  ]

  hotelingConfig: HospitalCategoryConfig = {
    title: "تخت"
  }

}
