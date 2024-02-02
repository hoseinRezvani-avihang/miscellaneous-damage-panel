import { ChangeDetectorRef, Injectable } from '@angular/core';
import { CitizenResult } from '../models/citizen.models';
import { BehaviorSubject } from 'rxjs';
import { DossierSave, DossierStep } from '../models/dossier-core.models';
import { ObjectUtil } from 'src/app/shared/utils/object-util';
import { PartnerInfo, PartnerTypeEnum, SelectPartner } from '../models/partner.models';
import { CpartyInfo } from '../models/cparty.models';
import { SharedForm, Subs } from '../models/service.models';
import { createDrugInfo, prepareCparty, preparePartner } from '../models/save-dossier-util';
import { calculateBankPart, calculateFinalOrgAmout, calculateTotals } from '../models/dossier.util';
import { HospitalService } from '../dossier/select-service/hospital/services/hospital.service';
import { HospitalService as HospitalServiceModel, HospitalServiceSymbol, HospitalSubsInfo } from '../dossier/select-service/hospital/models/Hospital-services.model';
import { HospitalSubs, HospitalSubsCategory } from '../dossier/select-service/hospital/models/Hospital-services.model';

@Injectable({
  providedIn: 'root',
})
export class DossierCoreDataService {
  constructor(
    private cdr: ChangeDetectorRef,
    private hospitalService: HospitalService
  ) { }

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

  passStep(stepName: string, breakStep = false) {
    let steps = ObjectUtil.flatten(this.$dossierSteps.value, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });
    if (steps[activeStepIndex + 1]) {
      steps[activeStepIndex + 1].isActive = !breakStep;
      if (steps[activeStepIndex + 1].subStep && steps[activeStepIndex + 2]) {
        steps[activeStepIndex + 2].isActive = !breakStep;
      }
      this.$dossierSteps.next(this.dossierSteps);
    }
  }

  break(stepName: string) {
    let steps = ObjectUtil.flatten(this.$dossierSteps.value, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    for (let i = activeStepIndex + 2; i < steps.length; i++) {
      steps[i].isActive = false;
    }

    steps[activeStepIndex + 1].isActive = false;
    this.$dossierSteps.next(this.dossierSteps);
    setTimeout(() => {
      steps[activeStepIndex + 1].isActive = true;
      this.$dossierSteps.next(this.dossierSteps);
      this.cdr.markForCheck();
    });
  }

  resetStep(stepName: string) {
    let steps = ObjectUtil.flatten(this.dossierSteps, 'subStep');
    let activeStepIndex = steps.findIndex((step: DossierStep) => {
      return step.name === stepName;
    });

    steps[activeStepIndex + 1].isActive = false;
    this.$dossierSteps.next(this.dossierSteps);
    setTimeout(() => {
      steps[activeStepIndex + 1].isActive = true;
      this.$dossierSteps.next(this.dossierSteps);
    });
  }

  isActive(stepName: string) {
    let steps = ObjectUtil.flatten(this.$dossierSteps.value, 'subStep');
    return steps.find((step) => step.name === stepName)?.isActive;
  }

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
  hospitalSubs = new BehaviorSubject<HospitalSubsInfo>({
    subs: this.hospitalService.hospitalSubs, 
    hospitalSymbol: null,
  });

  addSub(sub: Subs) {

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

  resetSubs() {
    this.subs.next([])
  }


  // =================== share Info =====================

  shareInfo = new BehaviorSubject<SharedForm | null>(null);
  hospitalShareInfo = new BehaviorSubject<any>({});

  setShareInfo(shareInfo: SharedForm) {
    this.shareInfo.next(shareInfo);
  }

  updateHospitalShares(shares: SharedForm, type: HospitalServiceModel) {
    let shareInfo = structuredClone(this.hospitalShareInfo.value);
    let hospitalCategory = type?.hospitalCategory as keyof HospitalSubs;
    let hospitalServiceSymbol = type?.symbol as keyof HospitalSubsCategory;
    shareInfo[hospitalCategory] = shareInfo[hospitalCategory] ?? {};
    shareInfo[hospitalCategory][hospitalServiceSymbol] = shares;
    this.hospitalShareInfo.next(shareInfo);
  }

  // ===================== save dossier ================

  saveDossier() {
    let totals = calculateTotals(this.subs.value);
    let dossierInfo: DossierSave = {
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
      sumOfInsuredPayedAmount: totals.insuredAmount
    }

    console.log(dossierInfo);

  }

  get isOutPatient() {
    return this.partnerInfo.value?.partnerType !== PartnerTypeEnum.hospital
  }

}
