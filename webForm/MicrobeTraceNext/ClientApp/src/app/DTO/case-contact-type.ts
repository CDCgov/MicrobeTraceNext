import { ContactType, Bool } from './enums';

export class CaseContactType {
  public IsHouseHoldContact: boolean;
  public IsCommunityAssociatedContact: boolean;
  public IsHealthcareAssociatedContact: boolean;
  public USCase: Bool;
  public PartOfOutbreak: Bool;
  public OutbreakName: string;

  constructor(){

  }
}
