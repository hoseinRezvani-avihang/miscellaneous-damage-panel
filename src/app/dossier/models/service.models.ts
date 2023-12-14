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
