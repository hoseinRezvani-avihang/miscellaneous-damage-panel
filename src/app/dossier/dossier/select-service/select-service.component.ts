import { Component, OnDestroy, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import {
  CPartiesInfo,
  PartnerType,
  PartnerTypeEnum,
  SelectPartner,
} from '../../models/partner.models';
import {
  DeleteSubConfig,
  OutpatientServiceInput,
  SharedForm,
  SubItemUI,
  Subs,
  SubsUI,
} from '../../models/service.models';
import { ServiceEventService } from '../../services/service-event.service';
import { parseSubs } from '../../models/save-dossier-util';
import { SubscriptionService } from '../../services/subscription.service';

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
    private serviceEvent: ServiceEventService,
    private subscriptionService: SubscriptionService
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
          serviceType: PartnerType.getParnterBYSymbol(this.dossierService.partnerInfo.value?.partnerType as PartnerTypeEnum).serviceType,
          searchType: PartnerType.getParnterBYSymbol(this.dossierService.partnerInfo.value?.partnerType as PartnerTypeEnum).searchType,
        };
      }
    });
  }

  onSubsUpdate() {
    this.subsInfo.subscribe((subs: Subs[]) => {
      if (!this.dossierService.isSubManuallyChanged.value) {
        console.log('this is first time');

      }
      this.subs = parseSubs(subs);
    });
  }

  onDeleteSub() {
    this.serviceEvent.deleteSub.subscribe((deleteConfig: DeleteSubConfig) => {
      this.subscriptionService.deleteSub(deleteConfig.recheckCode);
    });
  }

  onUpdateShares(shares: SharedForm) {
    this.dossierService.setShareInfo(shares)
  }

  getName(symbol: PartnerTypeEnum) {
    return PartnerType.getParnterBYSymbol(symbol).name;
  }

  ngOnDestroy(): void {
      this.subscriptionService.resetSubs();
  }
}
