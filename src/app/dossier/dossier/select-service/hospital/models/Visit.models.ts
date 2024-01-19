export enum VisitType{
  VISIT ='visit',
  CONSULTING ='consulting'
}

export class Visit {
  static VISIT_FIRSTDAY = new Visit('visitfirstday', 'ویزیت روز اول', '901920', VisitType.VISIT);
  static VISIT_SECONDDAY = new Visit('visitsecondday', 'ویزیت روز دوم و بعد', '901930', VisitType.VISIT);
  static VISIT_NEW_BORN = new Visit('visitnewborn', 'ویزیت اول نوزاد متولد شده', '901925', VisitType.VISIT);
  static VISIT_RELEASE = new Visit('visirelease', 'ویزیت ترخیص ', '901935', VisitType.VISIT);
  static VISIT_DEVELOPMENTAL = new Visit('visitdevelopmental', 'ویزیت تکاملی کودکان', '901942', VisitType.VISIT);
  static VISIT_SCREENING = new Visit('visitscreening', 'ویزیت غربالگری کودکان', '901944', VisitType.VISIT);
  static VISIT_OPHTHALMOLOGY = new Visit('visitophthalmology', 'ویزیت چشم پزشکی', '901946', VisitType.VISIT);
  static VISIT_PREMATURE_INFANT = new Visit('visitprematureinfant', 'ویزیت چشم نوزاد نارس', '901947', VisitType.VISIT);
  static VISIT_EMERGENCY3AND4 = new Visit('visitemergency3and4', 'ویزیت اورژانس سطح 3و 4 ', '901948', VisitType.VISIT);
  static VISIT_EMERGENCY1AND2 = new Visit('visitemergency1and2', 'ویزیت اورژانس سطح 1و 2 ', '901949', VisitType.VISIT);
  static CONSULTING_IN_PATIENT = new Visit('consultingInPatient', 'مشاوره در بیمار بستری ', '901940', VisitType.CONSULTING);
  static CONSULTING_FOR_DOCTOR = new Visit('consultingforDoctor', 'مشاوره برای پزشک مدعو', '901945', VisitType.CONSULTING);
  static CONSULTING_FOR_Forensic_DOCTOR = new Visit('consultingforForensicDoctor', 'مشاوره پزشک قانونی', '901865', VisitType.CONSULTING);
  static VISIT_REGULAR = new Visit("visitRegular", 'ویزیت عادی', "9000900004", VisitType.VISIT);

  private constructor(
    public symbol: string,
    public name: string,
    public serviceNN: string,
    public type: VisitType | string
  ) { }

  static visits = [
    Visit.VISIT_FIRSTDAY,
    Visit.VISIT_SECONDDAY,
    Visit.VISIT_NEW_BORN,
    Visit.VISIT_RELEASE,
    Visit.VISIT_DEVELOPMENTAL,
    Visit.VISIT_SCREENING,
    Visit.VISIT_OPHTHALMOLOGY,
    Visit.VISIT_PREMATURE_INFANT,
    Visit.VISIT_EMERGENCY3AND4,
    Visit.VISIT_EMERGENCY1AND2,
    Visit.CONSULTING_IN_PATIENT,
    Visit.CONSULTING_FOR_DOCTOR,
    Visit.CONSULTING_FOR_Forensic_DOCTOR,
    Visit.VISIT_REGULAR,
  ]
}


