import { OmrResult } from "./dossier-core.models";

export interface SearchServiceInput {
  searchClause: string;
  maxResultCount: number;
  serviceType: string;
  isIrc: boolean;
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
  service: SearchServiceResult;
  cnt: number;
  isMarkMatchService: boolean;
  claimAmount: number | null;
  ISGlobal: boolean;
  cpartyId: string;
  description: string | null;
  consumption: string | null;
  queueCount: number;
};

export interface Subs {
  detail: SubsDetail,
  omrResult: OmrResult
}

export interface OutpatientServiceInput {
  cparties: { id: string; name: string }[];
};
