import { Component, OnInit } from '@angular/core';
import { DossierCoreDataService } from '../../services/dossier-core-data.service';
import {
  CPartiesInfo,
  PartnerInfo,
  PartnerType,
  PartnerTypeEnum,
  SelectPartner,
} from '../../models/partner.models';
import { CpartyInfo } from '../../models/cparty.models';
import { OutpatientServiceInput, SubItemUI, Subs, SubsUI } from '../../models/service.models';
import { ServiceEventService } from '../../services/service-event.service';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.css'],
  providers: [ServiceEventService]
})
export class SelectServiceComponent implements OnInit {
  parnterInfo = this.dossierService.partnerInfo.asObservable();
  cpartyInfo = this.dossierService.cpartyInfo.asObservable();
  subsInfo = this.dossierService.subs.asObservable();

  outpatientServiceInput!: OutpatientServiceInput;
  subs: SubsUI = {subs: [], subShares: {}}

  constructor(
    private dossierService: DossierCoreDataService,
    private serviceEvent: ServiceEventService
    ) {}

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
        };
      }
    });
  };

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
      let totalAmount: number = subs.reduce((prev: number, curr: Subs) => {
        return prev + curr.omrResult.price.totalAmount;
      }, 0);

      let totalOrg = subs.reduce((prev: number, curr: Subs) => {
        return prev + curr.omrResult.price.orgAmount;
      }, 0);

      let totalInsured = subs.reduce((prev: number, curr: Subs) => {
        return prev + curr.omrResult.price.insuredAmount;
      }, 0);

      let totalBasePart = subs.reduce((prev: number, curr: Subs) => {
        return prev + curr.omrResult.subInfo.service.baseInfo.basePrice;
      }, 0);
      this.subs["subShares"] = {
        totalAmount: totalAmount,
        orgAmount: totalOrg,
        insuredAmount: totalInsured,
        basePart: totalBasePart
      }
    })
  };

  onDeleteSub() {
    this.serviceEvent.deleteSub.subscribe((recheckCode: string) => {
      this.dossierService.deleteSub(recheckCode);
    })
  }

  getName(symbol: PartnerTypeEnum) {
    return PartnerType.getParnterNameBYSymbol(symbol).name;
  }
}
