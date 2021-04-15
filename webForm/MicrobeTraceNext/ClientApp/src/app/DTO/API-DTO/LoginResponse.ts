export class LoginResponse {
  public success: boolean;
  public message :string;
  public email :string;
  public firstName :string;
  public lastName :string;
  public blockChainHashCode :string;
  public organization :string;
  public jurisdiction :string;
  public phone :string;
  public userID :string;
  public tenantID :string;
  public userRoles: string[];
  public middleName: string;
  public reportingHealthDepartment: string;
  public subJurisdiction: string;
  constructor()
  {
  } 
}