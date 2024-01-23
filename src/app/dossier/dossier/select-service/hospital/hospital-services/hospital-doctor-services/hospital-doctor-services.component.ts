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
    serviceType: HospitalService.visit.serviceType,
  }

  surgonConfig: HospitalCategoryConfig = {
    title: "جراح",
    serviceType: HospitalService.surgeon.serviceType,
    hospitalType: HospitalService.surgeon.hospitalType
  }

  consultantConfig: HospitalCategoryConfig = {
    title: "مشاوره در بخش",
    serviceType: HospitalService.consulting.serviceType,
    hospitalType: HospitalService.consulting.hospitalType
  }

  hospitalDentalConfig: HospitalCategoryConfig = {
    title: "بیمارستانی دندانپزشکی",
    serviceType: HospitalService.hospitalDental.serviceType,
    hospitalType: HospitalService.hospitalDental.hospitalType
  }

}
