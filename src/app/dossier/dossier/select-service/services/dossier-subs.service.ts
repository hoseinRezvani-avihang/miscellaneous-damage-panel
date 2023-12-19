import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CitizenResult } from 'src/app/dossier/models/citizen.models';
import { CpartyInfo } from 'src/app/dossier/models/cparty.models';
import { OMRInput, OmrResult } from 'src/app/dossier/models/dossier-core.models';
import { PartnerInfo, SelectPartner } from 'src/app/dossier/models/partner.models';
import { SubsDetail, SearchServiceInput, Subs } from 'src/app/dossier/models/service.models';
import { DossierCoreDataService } from 'src/app/dossier/services/dossier-core-data.service';
import { HttpDossierService } from 'src/app/dossier/services/http-dossier.service';
import { DateUtil } from 'src/app/shared/utils/date.util';

@Injectable({
  providedIn: 'root',
})
export class DossierSubsService {
  constructor(
    private dossierHttpService: HttpDossierService, 
    private dossierService: DossierCoreDataService
    ) {}

    partnerInfo = this.dossierService.partnerInfo as BehaviorSubject<SelectPartner>;
    cpartyInfo = this.dossierService.cpartyInfo as BehaviorSubject<CpartyInfo>;
    memberInfo = this.dossierService.citizenInfo as BehaviorSubject<CitizenResult>;
    subs = this.dossierService.subs as BehaviorSubject<Subs[]>;

  searchService(input: SearchServiceInput) {
    return this.dossierHttpService.searchService(input);
  };

  fetchOmr(input: SubsDetail) {
    let omrInput: OMRInput = {
      partnerId: this.partnerInfo.value.partner.partnerInfo.id,
      cpartyId: input.cpartyId,
      orderedPartnerId: this.cpartyInfo.value.cparty.partnerInfo.id as string,
      orderedCpartyId: this.cpartyInfo.value.cparty.contractPartyId,
      membernn: this.memberInfo.value.nationalNumber,
      serviceNN: input.service.nationalNumber,
      cnt: input.cnt,
      ISGlobal: input.ISGlobal, 
      type: 'drug',
      deliveredDate: DateUtil.noSlashShamsi(this.partnerInfo.value.serviceDate),
      orderedDate: DateUtil.noSlashShamsi(this.cpartyInfo.value.serviceDate),
      claimAmount: input.claimAmount,
      subs: this.getRecheckCodes(),
      isMarkMatchService: input.isMarkMatchService, 
      reviewType: "notContract"
    };

    return this.dossierHttpService.fetchOMR(omrInput).pipe(
      tap((omrResult: OmrResult) => {
        if (omrResult.isAllowed) {
          let sub: Subs = {
            detail: input,
            omrResult: omrResult
          }
          this.dossierService.addSub(sub);
        } 
      })
    )
  }

  getRecheckCodes() {
    return this.subs.value.map((sub: Subs) => {
      return sub.omrResult.reCheckCode;
    })
  }
}
