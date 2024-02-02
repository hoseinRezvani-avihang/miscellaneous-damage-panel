import { SharedForm } from './service.models';

export const calculateHospitalTotals = (shares: any) => {
  let totals: Partial<SharedForm> = {};
  let fields: Array<keyof SharedForm> = [
    'basePart',
    'deduction',
    'insuredAmount',
    'insuredPart',
    'orgAmount',
    'otherPart',
    'outOfCover',
    'paiedAmount',
    'payableAmount',
    'supplementaryPart',
    'totalAmount',
    'veteranPart',
  ];

  fields.forEach((field: keyof SharedForm) => {
      totals[field] = Object.values(shares).reduce(
        (prev: number, curr: any) => {
          return (prev +
            Object.values(curr).reduce((prev: number, curr: any) => {
              return prev + ((curr[field] as number) ?? 0);
            }, 0)) as number;
        },
        0
      );
  })

  return totals;
};
