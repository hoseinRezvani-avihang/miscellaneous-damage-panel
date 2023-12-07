import { FormGroup } from "@angular/forms";

export enum PartnerTypeEnum {
  clinic = "clinic",
  drugstore = "drugstore",
  equipment = "equipment",
  laboratory = "laboratory",
  imaging = "imaging",
  physiotherapy = "physiotherapy",
  dental = "dental",
  hospital = "hospital",
  other = "other",
  infirmary = "infirmary",
} 

export class PartnerType {
  static CLINIC = new PartnerType(PartnerTypeEnum.clinic, 'مطب');
  static DRUGSTORE = new PartnerType(PartnerTypeEnum.drugstore, 'داروخانه');
  static EQUIPMENT = new PartnerType(PartnerTypeEnum.equipment, 'تجهیزات');
  static LABORATORY = new PartnerType(PartnerTypeEnum.laboratory, 'آزمایشگاه');
  static IMAGING = new PartnerType(PartnerTypeEnum.imaging, 'تصویربرداری');
  static PHYSIOTHERAPY = new PartnerType(PartnerTypeEnum.physiotherapy, 'توان بخشی');
  static DENTAL = new PartnerType(PartnerTypeEnum.dental, 'دندانپزشکی');
  static HOSPITAL = new PartnerType(PartnerTypeEnum.hospital, 'بیمارستان');
  static OTHER = new PartnerType(PartnerTypeEnum.other, 'سایر');
  static INFIRMARY = new PartnerType(PartnerTypeEnum.infirmary, 'درمانگاه');

  constructor(public symbol: PartnerTypeEnum, public name: string) {}

  static getTypes: PartnerType[] = [
    this.CLINIC,
    this.DRUGSTORE,
    this.EQUIPMENT,
    this.LABORATORY,
    this.IMAGING,
    this.PHYSIOTHERAPY,
    this.DENTAL,
    this.HOSPITAL,
    this.OTHER,
    this.INFIRMARY,
  ];

  static getTypeSymbols = this.getTypes.map(
    (partner: PartnerType) => partner.symbol
  );
}

export interface SearchPartnerInput {
  searchClause: string;
  type: string;
  maxResultCount: number;
  hasContract?: any;
  provinceIds?: any;
}

export interface PartnerSearchResult {
  isReal: boolean;
  hasContract: boolean;
  nationalNumber?: string;
  partnerName: string;
  typeId: number;
  id: string;
  provinceName: string;
  ownerShipType: string;
  provinceId: number;
}

export interface SelectPartner {
  partner: PartnerSearchResult, 
  partnerType: PartnerTypeEnum,
  serviceDate: Date,
}