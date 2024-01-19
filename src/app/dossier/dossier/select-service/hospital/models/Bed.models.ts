export class Bed {

  static readonly ONEBED = new Bed('oneBed', 'اتاق یک تخته یا ایزوله', '980005');
  static readonly TWOBED = new Bed('twoBed', 'اتاق دو تخته', '980010');
  static readonly HEALTHY_INFANTBED = new Bed('healthyInfantBed', 'تخت نوزاد سالم', '980025');
  static readonly NICU_INFANTBED = new Bed('nicuInfantBed', 'تخت NICU', '980070');
  static readonly SICKED_INFANTBED = new Bed('sickedInfantBed', 'تخت نوزاد بیمار(انکوباتور)', '980030');
  static readonly BURNBED = new Bed('burnBed', 'تخت سوختگی', '980035');
  static readonly SPECIALBURNBED = new Bed('specialBurnBed', 'تخت ویژه سوختگی', '980007');
  static readonly MENTAL_PATIENT = new Bed('mentalPatient', 'تخت بیمار روانی', '980040');
  static readonly ICU = new Bed('ICU', 'آی سی یو', '980055');
  static readonly CCU = new Bed('CCU', 'سی سی یو', '980050');
  static readonly POSTCCU = new Bed('postCCU', 'پست سی سی یو', '980045');
  static readonly PATIENT_COMPANION_BED = new Bed('patientCompanionBed', ' تخت همراه بیمار', '980020');
  static readonly GENERAL_ROOM = new Bed('generalRoom', 'اتاق عمومی (تخت پرکتیتریسم )', '980359');
  static readonly DAY_CARE = new Bed('dayCare', 'تخت day care', '980360');
  static readonly DAY_CARE_UNDER_6 = new Bed('dayCareUnder6', 'تخت day care کمتر از 6 ساعت', '980356');


  constructor(
    public symbol: string,
    public name: string,
    public serviceNN: string
  ) { }

  static beds = [
    Bed.ONEBED,
    Bed.TWOBED,
    Bed.HEALTHY_INFANTBED,
    Bed.NICU_INFANTBED,
    Bed.SICKED_INFANTBED,
    Bed.BURNBED,
    Bed.SPECIALBURNBED,
    Bed.MENTAL_PATIENT,
    Bed.ICU,
    Bed.CCU,
    Bed.POSTCCU,
    Bed.PATIENT_COMPANION_BED,
    Bed.GENERAL_ROOM,
    Bed.DAY_CARE,
    Bed.DAY_CARE_UNDER_6,
  ]
}
