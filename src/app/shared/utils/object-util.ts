export class ObjectUtil {
  static flatten(arr: Array<any>, field: string): Array<any> {
    return arr ? arr.reduce((r: any, i: any) => [...r, i, ...this.flatten(i[field], field)], []) : [];
  }
}

export const exist = (value: any) => {
  if (value == null || value == undefined) {
    return false;
  } else if (value.toString().trim() == "") {
    return false;
  }

  return true;
}
