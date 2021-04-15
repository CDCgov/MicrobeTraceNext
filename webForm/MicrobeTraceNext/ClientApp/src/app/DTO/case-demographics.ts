import { AgeUnit, Sex, Bool, Race, PatientPlace } from './enums';
import { Location } from './location';

export class CaseDemographics{
  public DateOfBirth: string;
  public Age: number;
  public AgeUnits: string;
  public Sex: string;
  public IsPregnant: Bool;
  public Ethnicity: string;
  public IsTribal: boolean;
  public TribeName: string;
  public Enrolled: boolean;
  public IsBlackRace: boolean;
  public IsAsianRace: boolean;
  public IsWhiteRace: boolean;
  public IsAmericanIndianRace: boolean;
  public IsNativeHawaiianRace: boolean;
  public OtherRaceDesp: string;
  public IsUnknownRace: boolean;
  public IsOtherRace: boolean;
  public PatientLocationIllnessOnset: string;
  public OtherPateintPlaceDesp: string;
  public PhoneNumber: number;
  public Email: string;
  public Address: Location;
  
  constructor() {
    this.Address = new Location();
  }
}
