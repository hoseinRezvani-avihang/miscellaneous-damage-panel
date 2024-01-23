import { HospitalType } from "../dossier/select-service/hospital/models/hospital.models";
import { SearchType } from "../dossier/select-service/search-service/search-service.component";
import { CitizenResult } from "./citizen.models";
import { SaveCpartyInfo } from "./cparty.models";
import { SaveParnterInfo, ServiceType } from "./partner.models";
import { DrugInfo, ShareInfoItems, SharedForm } from "./service.models";

export interface DossierStep {
  name: string;
  isActive: boolean;
  exist: boolean;
  subStep?: DossierStep[];
}

export interface OMRInput {
  partnerId: string;
  cpartyId: string;
  orderedPartnerId: string;
  orderedCpartyId: string;
  membernn: string;
  serviceNN: string;
  cnt: number;
  ISGlobal: boolean;
  type: string;
  deliveredDate: string;
  orderedDate: string;
  claimAmount: number | null;
  subs: string[];
  isMarkMatchService: boolean;
  reviewType: string;
}

export interface OmrResult {
  isAllowed: boolean;
  price: Price;
  borkenRules: number[];
  resultMessage: ResultMessage[];
  reCheckCode: string;
  dateInfo: DateInfo;
  subInfo: SubInfo;
}

export interface Price {
  tariffInfo: TariffInfo;
  calculated: Calculated;
  shareInfo: ShareInfo[];
  totalAmount: number;
  orgAmount: number;
  insuredAmount: number;
  maxCoveredCount: number;
  mabna: string;
  resultCode: number;
  resultMessage: string;
}

export interface TariffInfo {
  basePrice: number;
  maxCoveredCount: number;
  ihioBasePrice: number;
  orgShare: number;
}

export interface Calculated {
  claimAmount: number;
  total: number;
  basePart: number;
  supplementaryPart: number;
  veteranPart: number;
  orgPart: number;
  mabna: string;
  orgAmount: number;
  insuredAmount: number;
}

export interface ShareInfo {
  key: string;
  engKey: keyof ShareInfoItems;
  value: number;
}

export interface ResultMessage {
  type: string;
  text: string;
}

export interface DateInfo {
  persianDateTime: string;
  persianCycle: string;
  epoch: number;
}

export interface SubInfo {
  nationalNumber: string;
  dependentServiceNN: string;
  orderedDate: string;
  deliveredDate: string;
  claimAmount: number;
  isMarkMatchService: boolean;
  type: string;
  unit: string;
  value: number;
  values: any[];
  referenceId: number;
  hint: any;
  reviewType: string;
  service: Service;
}

export interface Service {
  ap: any;
  baseInfo: BaseInfo;
  addPriceInfo: any;
  vaccumInfo: any;
  subsAP: any;
  subsGeneralInfo: any[];
}

export interface Ap {
  'Z49.1_MaxDeliveredCount': any;
  'Z49.1_MaxDeliveredDuration': any;
  'Z49.1_OrgPart': any;
  'Z94.0_MaxDeliveredCount': any;
  'Z94.0_MaxDeliveredDuration': any;
  'Z94.0_OrgPart': any;
  'Z49.2_MaxDeliveredCount': any;
  'Z49.2_MaxDeliveredDuration': any;
  'Z49.2_OrgPart': any;
  GeneralProducts: string;
  PriceAdditionalProperty: any;
  DrugAdditionalProperty: any;
  ExpertiseAdditionalProperty: any;
  InsuranceAdditionalProperty: any;
  AgeRangeSupplementary: any;
  PreCondition: any;
  MaxPreConditionDuration: any;
  Format: string;
  OtherMarksAdditionalProperty: any;
  InsuredMarks: string;
  Marks_OrgPart: string;
  Marks_MaxDeliveredCount: any;
  Marks_MaxDeliveredDuration: any;
  ExceptionOrgPart0: string;
  ExceptionOver70: string;
  MaxDeliveredCreditDuration: any;
  FamilyGroup: any;
  OrgPartChild: any;
  OrgPartSpouse: any;
  AgeRange: any;
  OrgPartVeteran: any;
  SupportedGender: any;
  OverlapInfo: any;
  DeliveryPartnerType: any;
  DeliveryCpartyType: any;
  DeliveryLicenseType: any;
  MaxDeliveredCount: string;
  MaxDeliveredDuration: string;
  PartnerType: any;
  CpartyType: any;
  SkipInsuredAmount: string;
  LicenseType: any;
  OrgPart: string;
  PharmacyBasePrice: any;
  OpenPrescriptionDiscount: any;
  NightPharmacyBasePrice: any;
  OrgPartOther: any;
  MaxDeliveredAmount: string;
  D56: any;
  D65: any;
  MaxDeliveredCreditAmount: any;
  G35: any;
  'Z49.1': any;
  DeliverLimit: any;
  MaxDeliveredDurationAmount: any;
  'Z94.0': any;
  'Z49.2': any;
  D56_MaxDeliveredCount: any;
  D56_MaxDeliveredDuration: any;
  PreConditonNotDelivered: any;
  D56_OrgPart: any;
  D65_MaxDeliveredCount: any;
  D65_MaxDeliveredDuration: any;
  D65_OrgPart: any;
  HospitalType: string;
  G35_MaxDeliveredCount: any;
  G35_MaxDeliveredDuration: any;
  G35_OrgPart: any;
}

export interface BaseInfo {
  id: number;
  name: string;
  typeSymbol: string;
  nationalNumber: number;
  genCode: number;
  isCovered: boolean;
  basePrice: number;
  ihioBasePrice: number;
}

export interface DossierSave {
  memberInfo: CitizenResult,
  orderInfo: SaveCpartyInfo,
  deliverInfo: SaveParnterInfo,
  delivererType: string,
  drugInfo: DrugInfo[],
  sumOfInsuredAmount: number,
	sumOfOrgAmount: number,
	sumOfTotalAmount: number,
  sumOfFinalOrgAmount:number,
	sumOfClaimBankPart:number,
	sumOfClaimTakmiliPart:number,
	sumOfClaimVeteranPart:number,
	sumOfClaimOtherPart:number,
	sumOfClaimInsuredAmount:number,
	sumOfClaimTotalAmount:number,
	sumOfInsuredPayedAmount:number,
  // regNoId: string,
	// category: string,
	sumOfClaimDeduction: number,
	sumOfClaimOutOfCover: number,
	sumOfClaimPayAmount: number,
	// status: string,
	// deductionReason: null | string,
	// deductionDescription: null | string,
	// hasInsuredMark: boolean
}

export interface ServiceSearchConfig {
  searchType: SearchType;
  serviceType: ServiceType;
  hospitalType: HospitalType;
}
