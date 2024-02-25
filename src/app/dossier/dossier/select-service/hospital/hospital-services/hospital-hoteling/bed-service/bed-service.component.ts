import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Bed } from '../../../models/Bed.models';
import { Subs, SubsDetail } from 'src/app/dossier/models/service.models';
import { HospitalCategories, HospitalService as HospitalModel, HospitalServiceSymbol, HospitalSubsInfo } from '../../../models/Hospital-services.model';
import { DossierSubsService } from '../../../../services/dossier-subs.service';
import { firstValueFrom } from 'rxjs';
import { ServiceType } from 'src/app/dossier/models/partner.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';

@Component({
  selector: 'app-bed-service',
  templateUrl: './bed-service.component.html',
  styleUrls: ['./bed-service.component.css']
})
export class BedServiceComponent implements OnInit {

  bedForm = this.hospitalService.bedForm;
  loading = false;

  constructor(
    private hospitalService: HospitalService,
    private dossierSubs: DossierSubsService,
    private data: DossierCoreDataService
  ) {}

  ngOnInit(): void {
      this.onBedServiceUpdated();
  }

  selectedBeds(beds: FormArray) {
    return beds.controls.filter((control: AbstractControl) => {
      return control.get("selected")?.value;
    })
  }

  async addBeds() {
    let selectedBeds = (this.bedForm.controls).filter((bed) => {
      let selectedControl = bed.get("selected") as FormControl;
      return selectedControl.value && selectedControl.enabled;
    })

    let beds = [];
    for (let bed of selectedBeds) {

    }

    for (let bedControl of selectedBeds) {
      this.loading = true;
      let bed = bedControl.value;
      let input: Partial<SubsDetail> = {
        claimAmount: bed.payAmount,
        cnt: 1,
        serviceType: ServiceType.SRVC,
        type: HospitalModel.bed,
        isMarkMatchService: false,
        ISGlobal: false,
        service: {
          nationalNumber: bed.bed?.serviceNN,
          fullName: bed.bed?.name,
        }
      }

      await firstValueFrom(this.dossierSubs.fetchOmr(input)).then().catch().finally(() => {
        this.loading = false;
      })
    }

  }

  onBedServiceUpdated() {
    this.data.hospitalSubs.subscribe((subs: HospitalSubsInfo) => {
      if (subs) {
        if (subs.hospitalSymbol === HospitalServiceSymbol.bed) {
          let hospitalSubs = subs.subs[HospitalCategories.hotelingServices][HospitalServiceSymbol.bed];
          let bedNames = hospitalSubs.map((value: Subs) => {
            return value.detail.service.nationalNumber;
          });
          for (let control of this.bedForm.controls) {
            if (bedNames.includes(control.value.bed?.serviceNN as any)) {
              (control.get("selected") as FormControl).disable();
              (control.get("selected") as FormControl).setValue(true);
            } else if (!this.loading) {
              (control.get("selected") as FormControl).enable();
              (control.get("selected") as FormControl).setValue(false);
            }
          }
        }
      }
    })
  }



}
