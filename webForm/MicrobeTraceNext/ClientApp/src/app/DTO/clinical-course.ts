import { DataCollectionSource, Bool } from './enums';

export class ClinicalCourse{

  public PatientDataCollection: boolean;
  public MedicalRecordDataCollection: boolean;
  public Symptomatic: Bool;
  public UnknownOnsetDate: boolean;
  public OnsetDate: string;
  public SymptomResolved: Bool;
  public ResolveDate: string;
  public UnknownResolveDate : boolean;
  public Pneumomia: Bool;
  public RespiratorySyndrome:Bool;
  public AbnomalChestXRay: Bool;
  public ReceivedECMO: Bool;
  public AnotherDiagnosis: Bool;
  public AbnormalEKG: Bool;
  public ReceivedMV: Bool;
  public MVDays: number;
  constructor(){}
}
