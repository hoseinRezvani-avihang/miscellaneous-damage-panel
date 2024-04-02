import { Injectable } from '@angular/core';
import { Subs } from '../models/service.models';
import { DossierCoreDataService } from './dossier-core-data.service';
import { HospitalServiceSymbol, HospitalSubs, HospitalSubsCategory } from '../dossier/select-service/hospital/models/Hospital-services.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private dossierService: DossierCoreDataService
  ) { }

  addSub(sub: Subs) {

    this.isSubAdded = true;
    if (this.isOutPatient) {
      let subs = structuredClone(this.subs.value);
      subs.push(sub);
      this.subs.next(subs);
    } else {
      let subs = structuredClone(this.hospitalSubs.value.subs) as HospitalSubs;
      if (subs) {
        if (sub.detail.type) {
          let hospitalType = sub.detail.type.hospitalCategory as keyof HospitalSubs;
          let hospitalServiceSymbol = sub.detail.type.symbol as keyof HospitalSubsCategory;
          subs[hospitalType][hospitalServiceSymbol].push(sub);
          this.hospitalSubs.next({
            subs:subs,
            hospitalSymbol: hospitalServiceSymbol as HospitalServiceSymbol
          });
        }
      }
    }
  }

  deleteSub(recheckCode: string) {
    let subs = this.subs.value;
    let foundedSub = subs.findIndex((sub: Subs) => {
      return sub.omrResult.reCheckCode === recheckCode;
    })

    if (foundedSub > -1) {
      subs.splice(foundedSub, 1);
      this.subs.next(subs);
    }
  }

  deleteHospitalSubs(deleteConfig: DeleteSubConfig) {
    let {recheckCode, type} = deleteConfig;
    let hospitalSubs = structuredClone(this.hospitalSubs.value.subs);
    let subs = hospitalSubs[(type?.hospitalCategory) as HospitalCategories][(type?.symbol) as HospitalServiceSymbol];
    let foundedSub = subs.findIndex((sub: Subs) => {
      return sub.omrResult.reCheckCode === recheckCode;
    });

    if (foundedSub > -1) {
      subs.splice(foundedSub, 1);
    this.hospitalSubs.next({
      hospitalSymbol: deleteConfig.type?.symbol as HospitalServiceSymbol,
      subs: hospitalSubs,
    });
    }
  }

  resetSubs() {
    this.subs.next([])
  }

}
