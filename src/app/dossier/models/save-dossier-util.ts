import { CpartyInfo, SaveCpartyInfo } from "./cparty.models";
import { SaveParnterInfo, SelectPartner } from "./partner.models";

export const prepareCparty = (cpartyInfo: CpartyInfo): SaveCpartyInfo => {
  return {
    ...cpartyInfo.cparty,
    dateOfService: cpartyInfo.serviceDate.toString(),
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
