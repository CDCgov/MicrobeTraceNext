import { Sections, ContactType } from './enums';
import { PatientInformation } from './patient-information';
import { InterviewerInformation } from './interviewer-information';
import { UserProfile } from './user-profile';
import { CaseClassification } from './case-classification';
import { HospitalizationInformation } from './hospitalization-information';
import { CaseDemographics } from './case-demographics';
import { HealthcareWorkerInfomation } from './healthcare-worker-infomation';
import { ExposureInformation } from './exposure-information';
import { ContactTracing } from './contact-tracing';
import { ClinicalCourse } from './clinical-course';
import { Symptoms } from './symptoms';
import { MedicalHistory } from './medical-history';
export interface ISection{
  Number: Sections;
  Saved: boolean;
}
export class Section1 implements ISection{
  public Number: Sections = Sections.One;
  public PatientInformation: PatientInformation;
  public InterviewerInformation: InterviewerInformation;
  public Saved: boolean;

  constructor(userProfile: UserProfile){
    this.PatientInformation = new PatientInformation();
    this.InterviewerInformation = new InterviewerInformation(userProfile);
  }
}
export class Section2 implements ISection{
  public Number: Sections = Sections.Two;
  public CaseClassification: CaseClassification;
  public HospitalizationInformation:HospitalizationInformation;
  public Saved: boolean;

  constructor(){
    this.CaseClassification = new CaseClassification();
    this.HospitalizationInformation = new HospitalizationInformation();

  }
}
export class Section3 implements ISection{
  public Number: Sections = Sections.Three;
  public Saved: boolean;
  public CaseDemographics: CaseDemographics;
  public HealthcareWorkerInfomation: HealthcareWorkerInfomation;

  constructor(){
    this.CaseDemographics = new CaseDemographics();
    this.HealthcareWorkerInfomation = new HealthcareWorkerInfomation();
  }

}
export class Section4 implements ISection{
  public Number: Sections = Sections.Four;
  public Saved: boolean;
  public ExposureInformation: ExposureInformation;
  constructor(){
    this.ExposureInformation = new ExposureInformation();;
  }

}
export class Section5 implements ISection{
  public Number: Sections = Sections.Five;
  public Saved: boolean;
  public ContactTracings: ContactTracing[];

  constructor(){
    //this.ContactTracings = new Array(new ContactTracing());
  }

}
export class Section6 implements ISection{
  public Number: Sections = Sections.Six;
  public Saved: boolean;
  public ClinicalCourse: ClinicalCourse;
  public Symptoms: Symptoms;


  constructor(){
    this.ClinicalCourse = new ClinicalCourse();
    this.Symptoms = new Symptoms();

  }

}

export class Section7 implements ISection{
  public Number: Sections = Sections.Seven;
  public Saved: boolean;
  public MedicalHistory: MedicalHistory;
  constructor(){
    this.MedicalHistory = new MedicalHistory();
  }
}

export class Section8 implements ISection{
  public Number: Sections = Sections.Eight;
  public Saved: boolean;
  public Comments: string;
}
