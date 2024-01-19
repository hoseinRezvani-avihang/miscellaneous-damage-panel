import { ShareInfo } from './dossier-core.models';
import { SHAREINFO, ShareInfoItems, SharedForm, SubShares, Subs, TOTALINFO } from './service.models';

export const calculateTotals = (subs: Subs[]): SubShares => {
  let totals: SubShares = { shareInfo: {} } as SubShares;
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
  let shareInfoFactors: { [key: string]: number } = {};
  Object.entries(shareInfo).forEach(([key, value]) => {
    shareInfoFactors[key] = calculateFactor(value, total)
  });
  return shareInfoFactors;
};

export const calculateFactor = (value: number, total: number) => {
  return total ? (value / total) : 0;
};

export const calculateFinalOrgAmout = (subs: Subs[]) => {
  return subs.reduce((prev: number, curr: Subs) => {
    return prev + (curr.detail.claimAmount ?? 0);
  }, 0)
}

export const calculateBankPart = (shares: SharedForm) => {
  const { deduction, insuredPart, outOfCover, paiedAmount, payableAmount, ...bankParts } = shares;
  return Object.values(bankParts).reduce((prev: number, curr: any) => {
    return prev + (curr ?? 0);
  }, 0);
}

export const price = (price: string | number | null): number => {

  const cleanValue = price?.toString()?.replace(/[^\d-]/g, '');

  if (!cleanValue) {
    return 0;
  }

  const isNegative = cleanValue.startsWith('-');
  const numericValue = parseFloat(cleanValue) ?? 0;

  return isNaN(numericValue) ? 0 : (isNegative ? -numericValue : numericValue);
}
