import { Component, OnInit } from '@angular/core';
import { HospitalTabs } from '../models/hospital.models';
import { HospitalCategories } from "../models/hospital.models"
import { ServiceEventService } from 'src/app/dossier/services/service-event.service';
import { DeleteSubConfig } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-hospital-services',
  templateUrl: './hospital-services.component.html',
  styleUrls: ['./hospital-services.component.css']
})
export class HospitalServicesComponent implements OnInit {

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

  constructor(
    private eventService: ServiceEventService,
    private data: DossierCoreDataService
  ) {}

  ngOnInit(): void {
      this.onDeleteSub();
  }

  onSelectTab(tabSymbol: HospitalCategories) {
    this.selectedTab = tabSymbol;
  }

  onDeleteSub() {
    this.eventService.deleteSub.subscribe((config: DeleteSubConfig) => {
      this.data.deleteHospitalSubs(config);
    })
  }

}
