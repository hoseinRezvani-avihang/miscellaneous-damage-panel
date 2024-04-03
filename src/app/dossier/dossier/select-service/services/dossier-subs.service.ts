import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CitizenResult } from 'src/app/dossier/models/citizen.models';
import { CpartyInfo } from 'src/app/dossier/models/cparty.models';
import { OMRInput, OmrResult } from 'src/app/dossier/models/dossier-core.models';
import { price } from 'src/app/dossier/models/dossier.util';
import { PartnerInfo, PartnerType, PartnerTypeEnum, SelectPartner, ServiceType } from 'src/app/dossier/models/partner.models';
import { SubsDetail, SearchServiceInput, Subs } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { HttpDossierService } from 'src/app/dossier/services/http-dossier.service';
import { DateUtil } from 'src/app/shared/utils/date.util';
import { HospitalSubsCategory } from '../hospital/models/Hospital-services.model';
import { SubscriptionService } from 'src/app/dossier/services/subscription.service';

@Injectable({
  providedIn: 'root',
})
export class DossierSubsService {
  constructor(
    private dossierHttpService: HttpDossierService,
    private dossierService: DossierCoreDataService,
    private subscriptionService: SubscriptionService
    ) {}

    partnerInfo = this.dossierService.partnerInfo as BehaviorSubject<SelectPartner>;
    cpartyInfo = this.dossierService.cpartyInfo as BehaviorSubject<CpartyInfo>;
    memberInfo = this.dossierService.citizenInfo as BehaviorSubject<CitizenResult>;
    subs = this.dossierService.subs as BehaviorSubject<Subs[]>;
    hospitalSubs = this.dossierService.hospitalSubs;

  searchService(input: SearchServiceInput) {
    return this.dossierHttpService.searchService(input);
  };

  fetchOmr<U extends SubsDetail | Partial<SubsDetail>>(input: U) {
    let omrInput: OMRInput = {
      partnerId: this.partnerInfo.value.partner.partnerInfo.id,
      cpartyId: this.dossierService.partnerInfo.value?.partner.cPartiesInfo[0].id as string,
      orderedPartnerId: this.cpartyInfo.value.cparty.partnerInfo.id as string,
      orderedCpartyId: this.cpartyInfo.value.cparty.contractPartyId,
      membernn: this.memberInfo.value.nationalNumber,
      serviceNN: input.service?.nationalNumber as string,
      cnt: input.cnt as number,
      ISGlobal: input.ISGlobal as boolean,
      type: input.serviceType as string,
      deliveredDate: DateUtil.noSlashShamsi(this.partnerInfo.value.serviceDate),
      orderedDate: DateUtil.noSlashShamsi(this.cpartyInfo.value.serviceDate),
      claimAmount: price(input.claimAmount ?? null),
      subs: this.getRecheckCodes(),
      isMarkMatchService: input.isMarkMatchService as boolean,
      reviewType: "notContract"
    };

    return this.dossierHttpService.fetchOMR(omrInput).pipe(
      tap((omrResult: OmrResult) => {
        if (omrResult.isAllowed) {
          let sub: Subs = {
            detail: input as SubsDetail,
            omrResult: omrResult
          }
          this.subscriptionService.addSub(sub);
        }
      })
    )
  }

  getRecheckCodes() {
    if (this.isOutPatient) {
      return this.subs.value.map((sub: Subs) => {
        return sub.omrResult.reCheckCode;
      })
    } else {
      let recheckCodes: string[] = [];
      Object.values(this.hospitalSubs.value.subs).forEach((category: HospitalSubsCategory) => {
        Object.values(category).forEach((subs: Subs[]) => {
          let recheckCode = subs.map((sub: Subs) => sub.omrResult.reCheckCode);
          recheckCodes.push(...recheckCode);
        })
      });

      return recheckCodes;
    }
  }

  get isOutPatient() {
    return this.dossierService.isOutPatient;
  }
}
