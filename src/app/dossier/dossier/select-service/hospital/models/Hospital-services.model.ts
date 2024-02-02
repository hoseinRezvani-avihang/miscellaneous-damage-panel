import { ServiceType } from "src/app/dossier/models/partner.models";
import { SharedForm, Subs } from "src/app/dossier/models/service.models";

export enum HospitalCategories {
  doctorServices = "doctorServices",
  drugAndEquipServices = "drugAndEquipServices",
  paraclinicServices = "paraclinicServices",
  hotelingServices = "hotelingServices",
  otherServices = "otherServices"
};

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

export enum HospitalServiceSymbol {
  visitInWard = "visitInWard",
  consultingInWarded = "consultingInWarded",
  surgeon = "surgeon",
  hospitalDental = "hospitalDental",
  drug = "drug",
  cosmetics = "cosmetics",
  consumables = "consumables",
  equipment = "equipment",
  laboratory = "laboratory",
  pathobiology = "pathobiology",
  imaging = "imaging",
  echo = "echo",
  physiotherapy = "physiotherapy",
  bed = "bed",
  nursingCare = "nursingCare",
  nursingServices = "nursingServices",
  emergencyServices = "emergencyServices",
  cpr = "cpr",
  other = "other"
}

export class HospitalService {

  static visit = new HospitalService(HospitalServiceSymbol.visitInWard, 'ویزیت در بخش', ServiceType.SRVC,ServiceType.SRVC, HospitalType.VISITDEPARTMENT, HospitalCategories.doctorServices);
  static surgeon = new HospitalService(HospitalServiceSymbol.surgeon, 'جراح', ServiceType.SRVC,ServiceType.Surgury, HospitalType.SURGEON, HospitalCategories.doctorServices);
  static consulting = new HospitalService(HospitalServiceSymbol.consultingInWarded, 'مشاوره در بخش', ServiceType.SRVC,ServiceType.SRVC, HospitalType.SURGEON, HospitalCategories.doctorServices);
  static hospitalDental = new HospitalService(HospitalServiceSymbol.hospitalDental, 'بیمارستان دندانپزشکی', ServiceType.Dental,ServiceType.SRVC, HospitalType.DENTALHOSPITAL, HospitalCategories.doctorServices);
  static drug = new HospitalService(HospitalServiceSymbol.drug, 'دارو', ServiceType.DRUG,ServiceType.Pharmacy, HospitalType.DRUG, HospitalCategories.drugAndEquipServices);
  static cosmetics = new HospitalService(HospitalServiceSymbol.cosmetics, 'لوازم بهداشتی', ServiceType.EQUP,ServiceType.Equipment, HospitalType.COSMETICS, HospitalCategories.drugAndEquipServices);
  static consumables = new HospitalService(HospitalServiceSymbol.consumables, 'لوازم مصرفی', ServiceType.EQUP,ServiceType.Equipment, HospitalType.CONSUMABLES, HospitalCategories.drugAndEquipServices);
  static equipment = new HospitalService(HospitalServiceSymbol.equipment, 'تجهیزات', ServiceType.EQUP,ServiceType.Equipment, HospitalType.EQUIPMENT, HospitalCategories.drugAndEquipServices);
  static labratoar = new HospitalService(HospitalServiceSymbol.laboratory, 'آزمایشگاه', ServiceType.Labratoar,ServiceType.Labratoar, HospitalType.LABORATORY, HospitalCategories.paraclinicServices);
  static pathobiology = new HospitalService(HospitalServiceSymbol.pathobiology, 'پاتوبیولوژی', ServiceType.Labratoar,ServiceType.Labratoar, HospitalType.PATHOBIOLOGY, HospitalCategories.paraclinicServices);
  static imaging = new HospitalService(HospitalServiceSymbol.imaging, 'تصویربرداری', ServiceType.Imaging,ServiceType.Imaging, HospitalType.IMAGING, HospitalCategories.paraclinicServices);
  static echo = new HospitalService(HospitalServiceSymbol.echo, 'خدمات قلب', ServiceType.Imaging,ServiceType.Imaging, HospitalType.CARDIACSERVICES, HospitalCategories.paraclinicServices);
  static physiotherapy = new HospitalService(HospitalServiceSymbol.physiotherapy, 'فیزیوتراپی', ServiceType.Physio,ServiceType.Physio, HospitalType.PHYSIOTHERAPY, HospitalCategories.paraclinicServices);
  static nursingCare = new HospitalService(HospitalServiceSymbol.nursingCare, 'مراقبت پرستاری', ServiceType.Clinic,ServiceType.Clinic, HospitalType.NURSINGCARE, HospitalCategories.hotelingServices);
  static nursingServices = new HospitalService(HospitalServiceSymbol.nursingServices, 'خدمت پرستاری', ServiceType.Clinic,ServiceType.Clinic, HospitalType.NURSINGSERVICES, HospitalCategories.hotelingServices);
  static bed = new HospitalService(HospitalServiceSymbol.bed, 'تخت', ServiceType.SRVC,ServiceType.SRVC, HospitalType.BED, HospitalCategories.hotelingServices);
  static emergencyServices = new HospitalService(HospitalServiceSymbol.emergencyServices, 'خدمات اورژانس', ServiceType.Clinic,ServiceType.Clinic, HospitalType.EMERGENCY, HospitalCategories.otherServices);
  static cpr = new HospitalService(HospitalServiceSymbol.cpr, 'سی پی آر', ServiceType.Clinic,ServiceType.Clinic, HospitalType.CPR, HospitalCategories.otherServices);
  static other = new HospitalService(HospitalServiceSymbol.other, 'سایر', ServiceType.Clinic,ServiceType.Other, HospitalType.OTHER, HospitalCategories.otherServices);

  constructor(
    public symbol: HospitalServiceSymbol,
    public name: string,
    public serviceType: ServiceType,
    public serviceSearchType: ServiceType,
    public hospitalType: HospitalType,
    public hospitalCategory: HospitalCategories
  ) { }
}

export interface HospitalSubsInfo {
  subs: HospitalSubs, 
  hospitalSymbol: HospitalServiceSymbol | null, 
}
export interface HospitalSubs {
  [HospitalCategories.doctorServices]: HospitalSubsCategory,
  [HospitalCategories.drugAndEquipServices]: HospitalSubsCategory,
  [HospitalCategories.paraclinicServices]: HospitalSubsCategory,
  [HospitalCategories.hotelingServices]: HospitalSubsCategory,
  [HospitalCategories.otherServices]: HospitalSubsCategory,
}

export interface HospitalSubsCategory {
  [key: string]: Subs[],
}

export interface HospitalSubsCategoryInfo {
  subs: Subs[],
  shares: SharedForm;
}
