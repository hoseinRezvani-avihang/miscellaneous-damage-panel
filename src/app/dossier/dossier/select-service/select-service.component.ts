import { Component, OnDestroy, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import {
  CPartiesInfo,
  PartnerType,
  PartnerTypeEnum,
  SelectPartner,
} from '../../models/partner.models';
import {
  OutpatientServiceInput,
  SubItemUI,
  Subs,
  SubsUI,
} from '../../models/service.models';
import { ServiceEventService } from '../../services/service-event.service';
import { calculateTotals } from '../../models/dossier.util';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.css'],
  providers: [ServiceEventService],
})
export class SelectServiceComponent implements OnInit, OnDestroy {
  parnterInfo = this.dossierService.partnerInfo.asObservable();
  cpartyInfo = this.dossierService.cpartyInfo.asObservable();
  subsInfo = this.dossierService.subs.asObservable();

  outpatientServiceInput!: OutpatientServiceInput;
  subs: SubsUI = { subs: [], subShares: {} };

  constructor(
    private dossierService: DossierCoreDataService,
    private serviceEvent: ServiceEventService
  ) { }

  ngOnInit(): void {
    this.onOutpatientServiceInput();
    this.onSubsUpdate();
    this.onDeleteSub();
  }

  onOutpatientServiceInput() {
    this.parnterInfo.subscribe((parnterInfo: SelectPartner | null) => {
      if (parnterInfo) {
        this.outpatientServiceInput = {
          cparties: parnterInfo.partner.cPartiesInfo.map(
            (value: CPartiesInfo) => ({ name: value.fullName, id: value.id })
          ),
          serviceType: PartnerType.getParnterBYSymbol(this.dossierService.partnerInfo.value?.partnerType as PartnerTypeEnum).serviceType
        };
      }
    });
  }

  onSubsUpdate() {
    this.subsInfo.subscribe((subs: Subs[]) => {
      this.subs['subs'] = subs.map((subItem: Subs) => {
        let subUI: SubItemUI = {
          serviceName: subItem.omrResult.subInfo.service.baseInfo.name,
          serviceNN: subItem.omrResult.subInfo.service.baseInfo.nationalNumber,
          recheckCode: subItem.omrResult.reCheckCode,
          totalAmount: subItem.omrResult.price.totalAmount,
          orgAmount: subItem.omrResult.price.orgAmount,
          insuredAmount: subItem.omrResult.price.insuredAmount,
        };

        return subUI;
      });

      this.subs['subShares'] = calculateTotals(subs);
    });
  }

  onDeleteSub() {
    this.serviceEvent.deleteSub.subscribe((recheckCode: string) => {
      this.dossierService.deleteSub(recheckCode);
    });
  }

  getName(symbol: PartnerTypeEnum) {
    return PartnerType.getParnterBYSymbol(symbol).name;
  }

  ngOnDestroy(): void {
      this.dossierService.resetSubs();
  }
}
