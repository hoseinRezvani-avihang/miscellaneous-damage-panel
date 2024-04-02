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

export enum ServiceType {

  Equipment ='E',
  Clinic ='O',
  Pharmacy ='D',
  Labratoar = 'L',
  Imaging ='I',
  Physio = 'P',
  Dental = 'T',
  Hoteling = 'R',
  HospitalOther = 'H',
  Surgury = 'S',
  Other = 'A',

  EQUP = 'equp',
  SRVC = 'srvc',
  DRUG = 'drug',
  DNTS ='dnts',
}



export class PartnerType {
  static CLINIC = new PartnerType(PartnerTypeEnum.clinic, 'مطب', ServiceType.SRVC, ServiceType.Clinic);
  static DRUGSTORE = new PartnerType(PartnerTypeEnum.drugstore, 'داروخانه', ServiceType.DRUG, ServiceType.Pharmacy);
  static EQUIPMENT = new PartnerType(PartnerTypeEnum.equipment, 'تجهیزات', ServiceType.EQUP, ServiceType.Equipment);
  static LABORATORY = new PartnerType(PartnerTypeEnum.laboratory, 'آزمایشگاه', ServiceType.SRVC, ServiceType.Labratoar);
  static IMAGING = new PartnerType(PartnerTypeEnum.imaging, 'تصویربرداری', ServiceType.SRVC, ServiceType.Imaging);
  static PHYSIOTHERAPY = new PartnerType(PartnerTypeEnum.physiotherapy, 'توان بخشی', ServiceType.SRVC, ServiceType.Physio);
  static DENTAL = new PartnerType(PartnerTypeEnum.dental, 'دندانپزشکی', ServiceType.DNTS, ServiceType.Dental);
  static HOSPITAL = new PartnerType(PartnerTypeEnum.hospital, 'بیمارستان', ServiceType.SRVC, ServiceType.Hoteling);
  static OTHER = new PartnerType(PartnerTypeEnum.other, 'سایر', ServiceType.SRVC, ServiceType.Other);
  static INFIRMARY = new PartnerType(PartnerTypeEnum.infirmary, 'درمانگاه', ServiceType.SRVC, ServiceType.Clinic);

  constructor(public symbol: PartnerTypeEnum, public name: string, public serviceType: ServiceType, public searchType: ServiceType) { }

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

  static getParnterBYSymbol(symbol: PartnerTypeEnum): PartnerType {
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

export interface SearchPartnerConfig {
  isContracted: boolean
}
