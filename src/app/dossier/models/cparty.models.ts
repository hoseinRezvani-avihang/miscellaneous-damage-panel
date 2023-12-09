import { PartnerInfo } from "./partner.models";

export interface CPartyResult {
  cPartyType: CPartyType[];
  certificate: Certificate[];
  image: any;
  fullName: string;
  partnerInfo: Partial<PartnerInfo>;
  contractPartyId: string;
}

export interface CPartyType {
  name: string;
  id: number;
}

export interface Certificate {
  licenseTypeName: string;
  noMedicalSystem: string;
}

export interface CpartyInfo {
    cparty: CPartyResult,
    serviceDate: Date,
}

export interface CpartyInfoUI {
    fullName: string,
    noMedicalSystem: string | null,
    serviceDate: Date,
    address?: string,
    image: string | null
}
