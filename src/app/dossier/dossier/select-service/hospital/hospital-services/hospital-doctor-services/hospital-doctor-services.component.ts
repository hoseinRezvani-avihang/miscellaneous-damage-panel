import { Component } from '@angular/core';
import { HospitalCategoryConfig, HospitalType } from '../../models/hospital.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';

@Component({
  selector: 'app-hospital-doctor-services',
  templateUrl: './hospital-doctor-services.component.html',
  styleUrls: ['./hospital-doctor-services.component.css']
})
export class HospitalDoctorServicesComponent {

  visitConfig: HospitalCategoryConfig = {
    title: "ویزیت در بخش",
    serviceType: ServiceType.SRVC,
  }

  surgonConfig: HospitalCategoryConfig = {
    title: "جراح",
    serviceType: ServiceType.Surgury,
    hospitalType: HospitalType.SURGEON
  }

  consultantConfig: HospitalCategoryConfig = {
    title: "مشاوره در بخش",
    serviceType: ServiceType.SRVC,
    hospitalType: HospitalType.SURGEON
  }

  hospitalDentalConfig: HospitalCategoryConfig = {
    title: "بیمارستانی دندانپزشکی",
    serviceType: ServiceType.Dental,
    hospitalType: HospitalType.DENTALHOSPITAL
  }

}
