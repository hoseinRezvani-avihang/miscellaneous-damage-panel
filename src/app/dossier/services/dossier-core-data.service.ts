import { Injectable } from '@angular/core';
import { CitizenResult } from '../models/citizen.models';
import { BehaviorSubject } from 'rxjs';
import { DossierConfig, DossierSave, DossierStep } from '../models/dossier-core.models';
import { PartnerTypeEnum, SelectPartner } from '../models/partner.models';
import { CpartyInfo } from '../models/cparty.models';
import { SharedForm, Subs } from '../models/service.models';
import { createDrugInfo, prepareCparty, preparePartner } from '../models/save-dossier-util';
import { calculateBankPart, calculateFinalOrgAmout, calculateTotals } from '../models/dossier.util';
import { HospitalService } from '../dossier/select-service/hospital/services/hospital.service';
import { HospitalService as HospitalServiceModel, HospitalSubsInfo } from '../dossier/select-service/hospital/models/Hospital-services.model';
import { HospitalSubs, HospitalSubsCategory } from '../dossier/select-service/hospital/models/Hospital-services.model';
import { HttpDossierService } from './http-dossier.service';

@Injectable()
export class DossierCoreDataService {
  constructor(
    private hospitalService: HospitalService,
    private httpDossierService: HttpDossierService
  ) { }


  // ============= config ===========

  config = new BehaviorSubject<DossierConfig>({} as DossierConfig);

  // ============= save dossier navigation ===========

  private dossierSteps: DossierStep[] = [
    {
      name: 'selectMember',
      isActive: true,
      exist: true,
    },
    {
      name: 'saveDossier',
      isActive: false,
      exist: true,
      subStep: [
        {
          name: 'selectPartner',
          isActive: false,
          exist: true,
        },
        {
          name: 'selectCparty',
          isActive: false,
          exist: true,
        },
        {
          name: 'selectService',
          isActive: false,
          exist: true,
        },
      ],
    },
  ];

  $dossierSteps = new BehaviorSubject<DossierStep[]>(this.dossierSteps);

  // ================== member info ================

  citizenInfo = new BehaviorSubject<CitizenResult | null>(null);

  setCitizenInfo(citizenInfo: CitizenResult) {
    this.citizenInfo.next(citizenInfo);
  }

  // ================== parnter info ================

  partnerInfo = new BehaviorSubject<SelectPartner | null>(null);

  setPartnerInfo(selectPartner: SelectPartner | null) {
    this.partnerInfo.next(selectPartner);
  }

  // ================== cparty info ================

  cpartyInfo = new BehaviorSubject<CpartyInfo | null>(null);

  setCpartyInfo(cpartyInfo: CpartyInfo | null) {
    this.cpartyInfo.next(cpartyInfo);
  }

  // ================== subs info ===================

  subs = new BehaviorSubject<Subs[]>([]);
  isSubManuallyChanged = new BehaviorSubject<boolean>(false); // در صورتی که خدمتی به صورت دستی اضافه شود
  hospitalSubs = new BehaviorSubject<HospitalSubsInfo>({
    subs: this.hospitalService.hospitalSubs,
    hospitalSymbol: null,
  });

  // =================== share Info =====================

  shareInfo = new BehaviorSubject<SharedForm | null>(null);
  hospitalShareInfo = new BehaviorSubject<any>({});

  setShareInfo(shareInfo: SharedForm) {
    this.shareInfo.next(shareInfo);
  }

  // ===================== save dossier ================

  savePrescription() {
    let totals = calculateTotals(this.subs.value);
    let dossierInfo: DossierSave = {
      paymentRequestId: this.config.value.regNoId,
      category: "damage",
      bankPaymentType: "S",
      clinincService: [],
      dentalService: [],
      equipInfo: [],
      imagingService: [],
      labService: [],
      hospitalServices: [],
      notes: [],
      otherServices: [],
      physioService: [],
      servicesCount: this.subs.value.length,
      deductionDescription: null,
      deductionReason: null,
      hasInsuredMark: false,
      status: "initialized",
      submitStatus: null,
      memberInfo: this.citizenInfo.value as CitizenResult,
      orderInfo: prepareCparty(this.cpartyInfo.value as CpartyInfo),
      deliverInfo: preparePartner(this.partnerInfo.value as SelectPartner),
      delivererType: this.partnerInfo.value?.partner.partnerInfo.delivererType as string,
      drugInfo: createDrugInfo(this.subs.value),
      sumOfInsuredAmount: totals.insuredAmount,
      sumOfOrgAmount: totals.orgAmount,
      sumOfTotalAmount: totals.totalAmount,
      sumOfFinalOrgAmount: calculateFinalOrgAmout(this.subs.value),
      sumOfClaimBankPart: calculateBankPart(this.shareInfo.value as SharedForm),
      sumOfClaimInsuredAmount: (this.shareInfo.value?.insuredPart ?? 0),
      sumOfClaimOtherPart: (this.shareInfo.value?.otherPart ?? 0),
      sumOfClaimTakmiliPart: (this.shareInfo.value?.supplementaryPart ?? 0),
      sumOfClaimTotalAmount: (this.shareInfo.value?.paiedAmount ?? 0),
      sumOfClaimVeteranPart: (this.shareInfo.value?.veteranPart ?? 0),
      sumOfClaimDeduction: (this.shareInfo.value?.deduction ?? 0),
      sumOfClaimOutOfCover: (this.shareInfo.value?.outOfCover ?? 0),
      sumOfClaimPayAmount: (this.shareInfo.value?.payableAmount ?? 0),
      sumOfInsuredPayedAmount: totals.insuredAmount,
      prePaymentAmount: null,
      prepaymentShareAmount: null,
    }

    console.log(dossierInfo);
    return this.httpDossierService.savePrescription(dossierInfo);

  }

  get isOutPatient() {
    return this.partnerInfo.value?.partnerType !== PartnerTypeEnum.hospital
  }

}
