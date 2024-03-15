import { Component, Input, OnInit } from '@angular/core';
import { HospitalCategoryConfig } from '../../models/hospital.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { HospitalService, HospitalSubs, HospitalSubsCategory, HospitalSubsInfo } from '../../models/Hospital-services.model';
import { SharedForm, Subs, SubsUI } from 'src/app/dossier/models/service.models';
import { parseSubs } from 'src/app/dossier/models/save-dossier-util';

@Component({
  selector: 'app-hospital-category',
  templateUrl: './hospital-category.component.html',
  styleUrls: ['./hospital-category.component.css']
})
export class HospitalCategoryComponent implements OnInit {

  @Input() config!: HospitalCategoryConfig;
  @Input() open = false;

  subs!: SubsUI;
  shares!: SharedForm;

  constructor(
    private dossierService: DossierCoreDataService,
  ) {}

  ngOnInit(): void {
      this.onSubsUpdate();
      this.onShareInfoUpdate();
  }

  onSubsUpdate() {
    this.dossierService.hospitalSubs.subscribe((hospitalSubs: HospitalSubsInfo) => {
      let hospitalCategory = this.config.type?.hospitalCategory as keyof HospitalSubs;
      let hospitalServiceSymbol = this.config.type?.symbol as keyof HospitalSubsCategory;

      if (hospitalSubs.hospitalSymbol === hospitalServiceSymbol || hospitalSubs.hospitalSymbol === null) {
        if (hospitalSubs) {
    
          if (hospitalCategory && hospitalServiceSymbol) {
            if (hospitalSubs.subs[hospitalCategory][hospitalServiceSymbol]) {
              if (!this.dossierService.isSubAdded) {
                console.log('subs not added yet');
                
              }
              this.subs = parseSubs(hospitalSubs.subs[hospitalCategory][hospitalServiceSymbol]);
            }
          }
        }
      }
    })
  }

  onShareInfoUpdate() {
    this.dossierService.hospitalShareInfo.subscribe((shareInfo: any) => {
      let hospitalCategory = this.config.type?.hospitalCategory as keyof HospitalSubs;
      let hospitalServiceSymbol = this.config.type?.symbol as keyof HospitalSubsCategory;
      if (hospitalCategory && hospitalServiceSymbol) {
        this.shares = shareInfo?.[hospitalCategory]?.[hospitalServiceSymbol]
      }
    })
  }

  onUpdateShares(shares: SharedForm) {
    this.dossierService.updateHospitalShares(shares, this.config.type as HospitalService)
  }

}
