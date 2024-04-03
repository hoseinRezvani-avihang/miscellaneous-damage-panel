import { Injectable } from '@angular/core';
import { DeleteSubConfig, SharedForm, Subs } from '../models/service.models';
import { DossierCoreDataService } from './dossier-core-data.service';
import { HospitalCategories, HospitalServiceSymbol, HospitalSubs, HospitalSubsCategory } from '../dossier/select-service/hospital/models/Hospital-services.model';
import { HospitalService as HospitalServiceModel, HospitalSubsInfo } from '../dossier/select-service/hospital/models/Hospital-services.model';


@Injectable()
export class SubscriptionService {

  constructor(
    private dossierService: DossierCoreDataService
  ) { }

  addSub(sub: Subs) {

    this.dossierService.isSubManuallyChanged.next(true);
    if (this.dossierService.isOutPatient) {
      let subs = structuredClone(this.dossierService.subs.value);
      subs.push(sub);
      this.dossierService.subs.next(subs);
    } else {
      let subs = structuredClone(this.dossierService.hospitalSubs.value.subs) as HospitalSubs;
      if (subs) {
        if (sub.detail.type) {
          let hospitalType = sub.detail.type.hospitalCategory as keyof HospitalSubs;
          let hospitalServiceSymbol = sub.detail.type.symbol as keyof HospitalSubsCategory;
          subs[hospitalType][hospitalServiceSymbol].push(sub);
          this.dossierService.hospitalSubs.next({
            subs:subs,
            hospitalSymbol: hospitalServiceSymbol as HospitalServiceSymbol
          });
        }
      }
    }
  }

  deleteSub(recheckCode: string) {
    let subs = structuredClone(this.dossierService.subs.value);
    let foundedSub = subs.findIndex((sub: Subs) => {
      return sub.omrResult.reCheckCode === recheckCode;
    })

    if (foundedSub > -1) {
      subs.splice(foundedSub, 1);
      this.dossierService.subs.next(subs);
    }
  }

  deleteHospitalSubs(deleteConfig: DeleteSubConfig) {
    let {recheckCode, type} = deleteConfig;
    let hospitalSubs = structuredClone(this.dossierService.hospitalSubs.value.subs);
    let subs = hospitalSubs[(type?.hospitalCategory) as HospitalCategories][(type?.symbol) as HospitalServiceSymbol];
    let foundedSub = subs.findIndex((sub: Subs) => {
      return sub.omrResult.reCheckCode === recheckCode;
    });

    if (foundedSub > -1) {
      subs.splice(foundedSub, 1);
    this.dossierService.hospitalSubs.next({
      hospitalSymbol: deleteConfig.type?.symbol as HospitalServiceSymbol,
      subs: hospitalSubs,
    });
    }
  };

  updateHospitalShares(shares: SharedForm, type: HospitalServiceModel) {
    let shareInfo = structuredClone(this.dossierService.hospitalShareInfo.value);
    let hospitalCategory = type?.hospitalCategory as keyof HospitalSubs;
    let hospitalServiceSymbol = type?.symbol as keyof HospitalSubsCategory;
    shareInfo[hospitalCategory] = shareInfo[hospitalCategory] ?? {};
    shareInfo[hospitalCategory][hospitalServiceSymbol] = shares;
    this.dossierService.hospitalShareInfo.next(shareInfo);
  }

  resetSubs() {
    this.dossierService.subs.next([])
  }

}
