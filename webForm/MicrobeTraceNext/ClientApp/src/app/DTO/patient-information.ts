import { Sections } from './enums';
import { CDCInfo } from './cdc-info';

export class PatientInformation{
  public Firstname: string;
  public Lastname: string;
  public Middlename: string;
  public DateOfBirth: string;
  //public FormDateOfBirth: string;
  public IsNewCase: boolean;
  public Section:Sections = Sections.One;
  public State: string;
  public CDCInformation:CDCInfo;

  constructor(){
    this.CDCInformation = new CDCInfo();
  }
}
