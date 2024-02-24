import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Subs, SubsDetail } from 'src/app/dossier/models/service.models';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { HospitalCategories, HospitalService as HospitalModel, HospitalServiceSymbol, HospitalSubsInfo } from '../../../models/Hospital-services.model';
import { firstValueFrom } from 'rxjs';
import { DossierSubsService } from '../../../../services/dossier-subs.service';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-visit-services',
  templateUrl: './visit-services.component.html',
  styleUrls: ['./visit-services.component.css']
})
export class VisitServicesComponent implements OnInit {

  visitForm = this.hospitalService.visitForm;

  constructor(
    private hospitalService: HospitalService,
    private dossierSubs: DossierSubsService,
    private data: DossierCoreDataService
  ) {}

 ngOnInit(): void {
     this.onBedServiceUpdated();
 }

  selectedVisit(visit: FormArray) {
    return visit.controls.filter((control: AbstractControl) => {
      return control.get("selected")?.value;
    })
  }

  async addVisit() {
    let selectedVisits = (this.visitForm.controls).filter((visit) => {
      let selectedControl = visit.get("selected") as FormControl;
      return selectedControl.value && selectedControl.enabled;
    })

    for (let visitControl of selectedVisits) {
      let visit = visitControl.value;
      let input: Partial<SubsDetail> = {
        claimAmount: visit.payAmount,
        cnt: visit.cnt as number,
        serviceType: ServiceType.SRVC,
        type: HospitalModel.visit,
        isMarkMatchService: false,
        ISGlobal: false,
        service: {
          nationalNumber: visit.visit?.serviceNN,
          fullName: visit.visit?.name,
        }
      }

      await firstValueFrom(this.dossierSubs.fetchOmr(input)).then()
    }
  }

  onBedServiceUpdated() {
    this.data.hospitalSubs.subscribe((subs: HospitalSubsInfo) => {
      if (subs) {
        if (subs.hospitalSymbol === HospitalServiceSymbol.visitInWard) {
          let hospitalSubs = subs.subs[HospitalCategories.doctorServices][HospitalServiceSymbol.visitInWard];
          let visitNames = hospitalSubs.map((value: Subs) => {
            return value.detail.service.nationalNumber;
          });
          for (let control of this.visitForm.controls) {
            if (visitNames.includes(control.value.visit?.serviceNN as any)) {
              control.disable();
              // (control.get("selected") as FormControl).setValue(true);
            } else {
              control.enable();
              // (control.get("selected") as FormControl).setValue(false);
            }
          }
        }
      }
    })
  }
}
