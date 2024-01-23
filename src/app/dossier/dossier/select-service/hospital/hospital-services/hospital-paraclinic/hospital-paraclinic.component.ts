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
      serviceType: HospitalService.labratoar.serviceType,
      hospitalType: HospitalService.labratoar.hospitalType
    }, {
      title: "پاتوبیولوژی",
      serviceType: HospitalService.pathobiology.serviceType,
      hospitalType: HospitalService.pathobiology.hospitalType
    }, {
      title: "تصویربرداری",
      serviceType: HospitalService.imaging.serviceType,
      hospitalType: HospitalService.imaging.hospitalType
    }, {
      title: "خدمات قلب",
      serviceType: HospitalService.echo.serviceType,
      hospitalType: HospitalService.echo.hospitalType
    },{
      title: "فیزیوتراپی",
      serviceType: HospitalService.physiotherapy.serviceType,
      hospitalType: HospitalService.physiotherapy.hospitalType
    },
  ]

}
