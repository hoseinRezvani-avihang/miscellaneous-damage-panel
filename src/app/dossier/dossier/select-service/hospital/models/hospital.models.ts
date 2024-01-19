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
}
