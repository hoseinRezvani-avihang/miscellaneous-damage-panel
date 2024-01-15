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
  static DRUGSTORE = new PartnerType(PartnerTypeEnum.drugstore, 'داروخانه', "D");
  static EQUIPMENT = new PartnerType(PartnerTypeEnum.equipment, 'تجهیزات');
  static LABORATORY = new PartnerType(PartnerTypeEnum.laboratory, 'آزمایشگاه');
  static IMAGING = new PartnerType(PartnerTypeEnum.imaging, 'تصویربرداری');
  static PHYSIOTHERAPY = new PartnerType(PartnerTypeEnum.physiotherapy, 'توان بخشی');
  static DENTAL = new PartnerType(PartnerTypeEnum.dental, 'دندانپزشکی');
  static HOSPITAL = new PartnerType(PartnerTypeEnum.hospital, 'بیمارستان');
  static OTHER = new PartnerType(PartnerTypeEnum.other, 'سایر');
  static INFIRMARY = new PartnerType(PartnerTypeEnum.infirmary, 'درمانگاه');

  constructor(public symbol: PartnerTypeEnum, public name: string, serviceSymbol?: string) { }

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

  static getParnterNameBYSymbol(symbol: PartnerTypeEnum): PartnerType {
    return PartnerType.getTypes.find((parnter: PartnerType) => {
      return parnter.symbol === symbol;
    }) as PartnerType;
  }
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
  partner: PartnerInfoResult,
  partnerType: PartnerTypeEnum,
  serviceDate: Date,
}

export interface PartnerInfoResult {
  partnerInfo: PartnerInfo
  cPartiesInfo: CPartiesInfo[]
}

export interface PartnerInfo {
  isReal: boolean
  image: any
  address: string
  nationalNumber: string
  partnerName: string
  typeName: string
  fullName: string
  typeId: number
  id: string
  ownerShipType: string
  hasContract: boolean
  delivererType: PartnerTypeEnum
}

export interface CPartiesInfo {
  image: any
  fullName: string
  types: Type[]
  id: string
  partnerId: string
  certificates: Certificate[]
}

export interface Type {
  name: string
  id: number
}

export interface Certificate {
  licenseTypeId: number
  licenseTypeName: string
  noMedicalSystem: string
}

export interface PartnerInfoUI {
  partnerName: string,
  image: string | null,
  address: string,
  nationalNumber: string,
  hasContract: boolean,
  delivererType: string,
  serviceDate: Date,
}

export interface SaveParnterInfo extends PartnerInfo {
  cpartyName: string,
  deliverDate: string,
  contractPartyId: string,
  isSimpleRegistration: boolean
}
