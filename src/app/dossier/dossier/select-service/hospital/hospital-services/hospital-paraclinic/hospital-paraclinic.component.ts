import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalService } from '../../models/Hospital-services.model';

@Component({
  selector: 'app-hospital-paraclinic',
  templateUrl: './hospital-paraclinic.component.html',
  styleUrls: ['./hospital-paraclinic.component.css']
})
export class HospitalParaclinicComponent {

  paraclinicConfigs: HospitalCategoryConfig[] = [
    {
      title: "آزمایشگاه",
      type: HospitalService.labratoar
    }, {
      title: "پاتوبیولوژی",
      type: HospitalService.pathobiology
    }, {
      title: "تصویربرداری",
      type: HospitalService.imaging
    }, {
      title: "خدمات قلب",
      type: HospitalService.echo
    },{
      title: "فیزیوتراپی",
      type: HospitalService.physiotherapy
    },
  ]

}
