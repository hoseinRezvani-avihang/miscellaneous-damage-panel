import { ShareInfo } from './dossier-core.models';
import { SHAREINFO, ShareInfoItems, SubShares, Subs, TOTALINFO } from './service.models';

export const calculateTotals = (subs: Subs[]): SubShares => {
  let totals: SubShares = {shareInfo: {}} as SubShares;
  TOTALINFO.forEach((value: keyof SubShares) => {
    (totals[value] as number) = subs.reduce((prev: number, curr: Subs) => {
      return prev + ((curr.omrResult.price[value] as number) ?? 0);
    }, 0)
  });

  SHAREINFO.forEach((value: keyof ShareInfoItems) => {
    (totals["shareInfo"] as any)[value] = subs.reduce((previousValue: number, currentValue: Subs) => {
      return (
        (currentValue.omrResult.price.shareInfo.find(
          (shareItem: ShareInfo) => {
            return shareItem.engKey === value;
          }
        )?.value ?? 0) + previousValue
      );
    }, 0);
  });

  return totals;
}

export const calculateShareInfoFactors = (
  shareInfo: ShareInfoItems,
  total: number
) => {
    let shareInfoFactors: {[key: string]: number} = {};
    Object.entries(shareInfo).forEach(([key, value]) => {
        shareInfoFactors[key] = calculateFactor(value, total)
    });
    return shareInfoFactors;
};

export const calculateFactor = (value: number, total: number) => {
  return total ? (value / total) : 0;
};
