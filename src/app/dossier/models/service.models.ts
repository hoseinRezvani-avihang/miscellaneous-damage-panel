import { FormControl, FormGroup } from "@angular/forms";
import { OmrResult } from "./dossier-core.models";
import { HospitalType } from "../dossier/select-service/hospital/models/hospital.models";
import { ServiceType } from "./partner.models";
import { HospitalService } from "../dossier/select-service/hospital/models/Hospital-services.model";

export interface SearchServiceInput {
  searchClause: string;
  maxResultCount: number;
  serviceType: string;
  isIrc: boolean;
  hospitalType?: HospitalType
}

export interface SearchServiceResult {
  id: number;
  fullName: string;
  shortName: string;
  nationalNumber: string;
  genericCode: string;
  interfaceName: string;
  description: string;
  NORepeat: number;
  state: State;
  hint: any;
  basePrice: number;
}

export interface State {
  isCovered: boolean;
  isSpecialDisease: boolean;
  shape: string;
}

export interface SubsDetail {
  service: Partial<SearchServiceResult>;
  cnt: number;
  isMarkMatchService: boolean;
  claimAmount: number | null;
  ISGlobal: boolean;
  cpartyId: string;
  description: string | null;
  consumption: string | null;
  numberOfPeriod: number;
  type?: HospitalService
};

export interface Subs {
  detail: SubsDetail,
  omrResult: OmrResult
}

export interface OutpatientServiceInput {
  cparties: { id: string; name: string }[];
  serviceType: ServiceType,
  searchType: ServiceType
};

export interface SubsUI {
  subs: SubItemUI[],
  subShares: Partial<SubShares>,
}

export interface SubItemUI {
  serviceName: string,
  serviceNN: number,
  recheckCode: string,
  totalAmount: number,
  orgAmount: number,
  insuredAmount: number
}

export interface SubShares {
  totalAmount: number,
  orgAmount: number,
  insuredAmount: number,
  shareInfo: ShareInfoItems
}

export interface ShareInfoItems {
  basePart: number,
  supplementaryPart: number,
  veteranPart: number,
  otherPart: number,
  insuredPart: number,
}

export const TOTALINFO: Array<keyof SubShares> = ["insuredAmount", "orgAmount", "totalAmount"];
export const SHAREINFO: Array<keyof ShareInfoItems> = ["basePart", "insuredPart", "otherPart", "supplementaryPart", "veteranPart"];

export interface SharedForm {
  paiedAmount: null | number,
  outOfCover: number | null,
  deduction: number | null,
  basePart: number | null,
  insuredPart: number | null,
  otherPart: number | null,
  supplementaryPart: number | null,
  veteranPart: number | null,
  payableAmount: number | null,
  totalAmount: number | null
  orgAmount: number | null
  insuredAmount: number | null
};

export interface DrugInfo {
  drugName: string
  ircCode: boolean
  drugNumber: string
  numberOfPeriod: string
  drugConsumption: string
  drugExplain: string
  drugConsumptionAmont: string
  DrugNN: string
  finalOrgAmount: any
  total: number
  orgAmount: number
  insuredAmount: number
  showAlert: string
  shape: string
  isMarkMatchService: boolean,
  omrResult: OmrResult
}
