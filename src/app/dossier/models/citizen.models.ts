export interface CitizenInput {
  nationalNumber: string;
  userId: number;
  delivererType: string | null;
}

export interface CitizenResult {
  accountsInfo: AccountsInfo[];
  relationType: string;
  familyOwnerId: string;
  lastName: string;
  cellphoneNumber: number;
  isBlacklist: boolean;
  gender: string;
  groups: [
    {
      name: string;
      id: string;
    }
  ];
  avatar: string;
  creationDate: number;
  birthDate: number;
  personnelNo: string;
  firstName: string;
  isAlive: boolean;
  emailAddress: string;
  nationalNumber: string;
  activatedBlacklistInfo: {
    lastTimeadded: number;
    lastTimeaddedbyUserId: number;
    description: string;
  };
  id: string;
  state: string;
  maritalStatus: string;
  groupsInfo: GroupsInfo[];
  familyInfo: FamilyInfo;
  dto: any;
  citizenSesson: string;
  initializedPrsCount: number;
  financialConfirmedPrsCount: number;
  readyToSubmitPrsCount: number;
  submittedPrsCount: number;
  returnedPrsCount: number;
  confirmedPrsCount: number;
}

export interface AccountsInfo {
  familyId: string;
  deactivationInfo: {
    lastDeactivationTime: number;
    lastDeactivationByUserId: number;
  };
  accountValidFrom: number;
  accountValidTo: number;
  groups: [
    {
      name: string;
      id: string;
    }
  ];
  tariffInfo: TarifInfo;
  id: string;
  isActive: boolean;
  productInfo: ProductInfo;
  memberId: string;
  dto?: number;
  cancellationInfo?: {
    reason: string;
    description: string;
    userId: string;
  };
}

export interface GroupsInfo {
  name: string;
  symbol: string;
  description: string;
  id: string;
  userId: string;
}

export interface FamilyInfo {
  resPostalCode: string;
  resGender: string;
  resPhoneNumber: string;
  resLastName: string;
  resFirstName: string;
  resBirthDate: number;
  resGroups: [];
  resNationalNumber: string;
  resAvatar: string;
  resState: string;
  resMaritalStatus: string;
  resWorkPlace: ResWorkPlace;
  resCellphoneNumber: number;
  resPersonnelNo: string;
  responsibleId: string;
  id: string;
  resGeo: GeoWorkPlace;
  resEmailAddress: string;
  resAddress: string;
}

export interface TarifInfo {
  name: string;
  symbol: string;
  description: string;
  id: string;
  params: TarifInfoParams[];
}

export interface TarifInfoParams {
  name: string;
  symbol: string;
  unit: string;
  value: string;
  pricePerUnit: string;
}

export interface ProductInfo {
  symbol: string;
  name: string;
  description: string;
  activeTo: number;
  id: string;
  creationDate: number;
  isActive: boolean;
  userId: string;
  activeFrom: number;
  createdById: string;
  tariffs: string[];
}

export interface ResWorkPlace {
  summary: string;
  headquarterInfo: {};
  geoWorkPlace: GeoWorkPlace;
  officeInfo: {
    id: string;
  };
}

export interface GeoWorkPlace {
  summary: string;
  province: GeoDetail;
  level: number;
  city: GeoDetail;
  isRural: boolean;
  part: GeoDetail;
  region: GeoDetail;
  countie: GeoDetail;
}

export interface GeoDetail {
  name: string;
  id: string;
}
