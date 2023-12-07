export interface DossierStep {
  name: string;
  isActive: boolean;
  exist: boolean;
  subStep?: DossierStep[];
}


