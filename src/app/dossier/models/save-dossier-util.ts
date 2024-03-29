import { HospitalService } from "../dossier/select-service/hospital/models/Hospital-services.model";
import { CpartyInfo, SaveCpartyInfo } from "./cparty.models";
import { calculateTotals } from "./dossier.util";
import { SaveParnterInfo, SelectPartner } from "./partner.models";
import { DrugInfo, SubItemUI, Subs, SubsUI } from "./service.models";

export const prepareCparty = (cpartyInfo: CpartyInfo): SaveCpartyInfo => {
  return {
    ...cpartyInfo.cparty,
    dateOfService: cpartyInfo.serviceDate?.toString(),
  }
}

export const preparePartner = (partnerInfo: SelectPartner): SaveParnterInfo => {
  return {
    ...partnerInfo.partner.partnerInfo,
    cpartyName: partnerInfo.partner.cPartiesInfo[0].fullName,
    contractPartyId: partnerInfo.partner.cPartiesInfo[0].id,
    deliverDate: partnerInfo.serviceDate.toString(),
    isSimpleRegistration: true,
  }
}

export const createDrugInfo = (subs: Subs[]) => {
  return subs.map((drugService: Subs) => {
    return convertDrugService(drugService);
  })
}

export const parseSubs = (subsInfo: Subs[], type?: HospitalService) => {
  let subs: SubsUI = { subs: [], subShares: {} };
  subs['subs'] = subsInfo.map((subItem: Subs) => {
    let subUI: SubItemUI = {
      serviceName: subItem.omrResult.subInfo.service.baseInfo.name,
      serviceNN: subItem.omrResult.subInfo.service.baseInfo.nationalNumber,
      recheckCode: subItem.omrResult.reCheckCode,
      totalAmount: subItem.omrResult.price.totalAmount,
      orgAmount: subItem.omrResult.price.orgAmount,
      insuredAmount: subItem.omrResult.price.insuredAmount,
      type
    };

    return subUI;
  });

  subs['subShares'] = calculateTotals(subsInfo);
  return subs;
}

export const convertDrugService = (drugService: Subs) => {
  let drug: DrugInfo = {
    drugName: drugService.detail.service.fullName as string,
    DrugNN: drugService.detail.service.nationalNumber as string,
    ircCode: drugService.detail.ISGlobal,
    drugNumber: drugService.detail.cnt.toString(),
    numberOfPeriod: drugService.detail.numberOfPeriod.toString(),
    drugConsumption: drugService.detail.consumption ?? "",
    drugConsumptionAmont: "",
    drugExplain: drugService.detail.description ?? "",
    isMarkMatchService: drugService.detail.isMarkMatchService,
    shape: "O",
    showAlert: "",
    omrResult: drugService.omrResult,
    insuredAmount: drugService.omrResult.price.insuredAmount,
    finalOrgAmount: drugService.detail.claimAmount,
    orgAmount: drugService.omrResult.price.orgAmount,
    total: drugService.omrResult.price.totalAmount,
  };

  return drug;
}
