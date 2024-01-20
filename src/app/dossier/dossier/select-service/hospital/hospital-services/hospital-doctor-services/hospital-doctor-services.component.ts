import { Component } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';

@Component({
  selector: 'app-hospital-doctor-services',
  templateUrl: './hospital-doctor-services.component.html',
  styleUrls: ['./hospital-doctor-services.component.css']
})
export class HospitalDoctorServicesComponent {

  visitConfig: HospitalCategoryConfig = {
    title: "ویزیت در بخش"
  }

  surgonConfig: HospitalCategoryConfig = {
    title: "جراح"
  }

  consultantConfig: HospitalCategoryConfig = {
    title: "مشاوره در بخش"
  }

  hospitalDentalConfig: HospitalCategoryConfig = {
    title: "بیمارستانی دندانپزشکی"
  }

}
