import { Bool } from './enums';
import { Tests } from './tests';

export class MedicalHistory{
  public UnderlyingMedicalCondition: Bool;
  public DiabetesMellitus : Bool;
  public ChronicLiverDisease: Bool;
  public SubstanceAbuse: Bool;
  public OtherUnderlyingCondition: Bool;
  public OtherUnderlyingConditionSpecity: Boolean;
  public OtherChronicDisease: Bool;
  public OtherChronicDiseaseSpecify: string;
  public Hypertension: Bool;
  public ImmunosuppressiveCondition: Bool;
  public AutoimmuneCondition: Bool;
  public SevereObesity: Bool;
  public CurrentSmoker: Bool;
  public PsychologicalCondition: Bool;
  public PsychologicalConditionSpecify: string;
  public Disability: Bool;
  public DisabilitySpecify: string;
  public CardiovascularDisease: Bool;
  public FormerSmoker: Bool;
  public ChronicRenalDisease: Bool;
  public ChronicLungDisease: Bool;
  public SARS_CoV_2_Testing: Tests;
  public SARS_CoV_2_Specimens_ID_1: string;
  public SARS_CoV_2_Specimens_ID_2: string;
  public SARS_CoV_2_Specimens_ID_3: string;


  constructor(){
    this.SARS_CoV_2_Testing = new Tests();
  }
}
