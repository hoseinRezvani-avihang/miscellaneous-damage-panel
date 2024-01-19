import { Component } from '@angular/core';
import { HospitalTabs } from '../models/hospital.models';
import { HospitalCategories } from "../models/hospital.models"

@Component({
  selector: 'app-hospital-services',
  templateUrl: './hospital-services.component.html',
  styleUrls: ['./hospital-services.component.css']
})
export class HospitalServicesComponent {

  tabs: HospitalTabs[] = [
    {
      name: "خدمات پزشکان",
      symbol: HospitalCategories.doctorServices
    }, {
      name: "دارو و تجهیزات",
      symbol: HospitalCategories.drugAndEquipServices
    }, {
      name: "پاراکلینیک",
      symbol: HospitalCategories.paraclinicServices
    }, {
      name: "هتلینگ",
      symbol: HospitalCategories.hotelingServices
    }, {
      name: "سایر",
      symbol: HospitalCategories.otherServices
    },
  ]

  hospitalCategory = HospitalCategories;
  selectedTab = this.hospitalCategory.doctorServices;

  onSelectTab(tabSymbol: HospitalCategories) {
    this.selectedTab = tabSymbol;
  }

}
