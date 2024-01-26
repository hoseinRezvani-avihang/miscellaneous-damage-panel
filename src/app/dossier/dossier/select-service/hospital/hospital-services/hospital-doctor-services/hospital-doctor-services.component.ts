import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalService } from '../../models/Hospital-services.model';

@Component({
  selector: 'app-hospital-doctor-services',
  templateUrl: './hospital-doctor-services.component.html',
  styleUrls: ['./hospital-doctor-services.component.css']
})
export class HospitalDoctorServicesComponent {

  visitConfig: HospitalCategoryConfig = {
    title: "ویزیت در بخش",
    type: HospitalService.visit
  }

  surgonConfig: HospitalCategoryConfig = {
    title: "جراح",
    type: HospitalService.surgeon
  }

  consultantConfig: HospitalCategoryConfig = {
    title: "مشاوره در بخش",
    type: HospitalService.visit
  }

  hospitalDentalConfig: HospitalCategoryConfig = {
    title: "بیمارستانی دندانپزشکی",
    type: HospitalService.hospitalDental
  }

}
