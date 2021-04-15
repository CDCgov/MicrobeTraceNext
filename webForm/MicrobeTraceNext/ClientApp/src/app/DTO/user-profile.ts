import { BPaaSInfo } from './bpass-information';

export class UserProfile {
  public Firstname: string;
  public Middlename: string;
  public Lastname: string;
  public Email:string;
  public IsLoggedIn: boolean  = false;
  public Phone: string;
  public Organization: string;
  public Password: string;
  public Jurisdiction: string;
  public ReportingHealthDepartment: string;
  public SubJurisdiction: string;
  public BPaasInfo: BPaaSInfo;
  constructor(){
    this.BPaasInfo = new BPaaSInfo();
  }
}
