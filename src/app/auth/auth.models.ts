export interface initializeResult {
  generalConfig: generalConfig;
}

export interface generalConfig {
  ssoDisabled: false;
  sso: string;
  companyWebPage: string;
  faviconPath: string;
  helpFilepath: string;
  logoPath: string;
  logoBase64: string;
  projectTitle: string;
  projectSubTitle: string;
  projectName: string;
  mode: string;
}

export interface LoginInput {
  clientWidth: number ;
  clientHeight: number;
  ssoToken?: string;
}

export interface LoginResult {
  geo: {
    summary:string,
    province :{
      name:string,
      id:number
    }
    partId: number,
    citiyesId: number,
    provinceId: number
  };
  id: number;
  fullName: string;
  loginName: string;
  gender: string;
  type: string;
  isTwoStep: string;
  description: string;
  emailAddress: string;
  avatar: string;
  accessNodes: Array<string>;
  category:string;
}
