import { ShareInfoItems } from './service.models';

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
