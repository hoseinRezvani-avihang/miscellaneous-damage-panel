import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-paraclinic',
  templateUrl: './hospital-paraclinic.component.html',
  styleUrls: ['./hospital-paraclinic.component.css']
})
export class HospitalParaclinicComponent {

  paraclinicConfigs: HospitalCategoryConfig[] = [
    {
      title: "آزمایشگاه"
    }, {
      title: "پاتوبیولوژی"
    }, {
      title: "تصویربرداری"
    }, {
      title: "خدمات قلب"
    },{
      title: "فیزیوتراپی"
    },
  ]

}
