import { ServiceType } from "src/app/dossier/models/partner.models";
import { HospitalService } from "./Hospital-services.model";

export interface HospitalTabs {
  symbol: HospitalCategories,
  name: string,
  shares?: any,
}

export enum HospitalCategories {
  doctorServices = "doctorServices",
  drugAndEquipServices = "drugAndEquipServices",
  paraclinicServices = "paraclinicServices",
  hotelingServices = "hotelingServices",
  otherServices = "otherServices"
};

export interface HospitalCategoryConfig {
  title: string,
  type?: HospitalService
}

export interface GeneralServiceConfig {
  type: HospitalService,
  hospitalType?: HospitalType,
}

export enum HospitalType {
  SURGEON = 'Surgeon',
  IMAGING = 'Imaging',
  DENTALHOSPITAL = 'DentalHospital',
  NURSINGSERVICES = 'NursingServices',
  NURSINGCARE = "NursingCare",
  CARDIACSERVICES = 'CardiacServices',
  EMERGENCY = 'Emergency',
  PHYSIOTHERAPY = 'Physiotherapy',
  CPR = 'CPR',
  LABORATORY = 'Laboratory',
  PATHOBIOLOGY = 'Pathobiology',
  VISITDEPARTMENT = 'VisitDepartment',
  COUNSELINGDEPARTMENT = 'CounselingDepartment',
  BED = 'Bed',
  EQUIPMENT = 'Equipment',
  CONSUMABLES = 'Consumables',
  COSMETICS = 'Cosmetics',
  DRUG = 'Drug',
  OTHER = 'Other',
}
