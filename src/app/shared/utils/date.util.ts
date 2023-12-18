export class DateUtil {
  constructor() {}

  static toShamsi(date: Date): string;
  static toShamsi(date: null): null;
  static toShamsi(date: Date | null) {
    if (date) {
      return new Intl.DateTimeFormat('fa-IR-u-nu-latn')
        .format(new Date(date))
        .split('/')
        .map((value: string) => {
          return value.length === 1 ? `0${value}` : value;
        })
        .join('');
    }

    return date;
  }

  static removeSlash(date: string): string;
  static removeSlash(date: null): null;
  static removeSlash(date: string | null) {
    if (date) {
      return date.replace(/\//g, '');
    }

    return date;
  }

  static noSlashShamsi(date: Date): string;
  static noSlashShamsi(date: null): null;
  static noSlashShamsi(date: Date | null) {
    if (date) {
      return DateUtil.removeSlash(DateUtil.toShamsi(date));
    }

    return date;
  }
}
