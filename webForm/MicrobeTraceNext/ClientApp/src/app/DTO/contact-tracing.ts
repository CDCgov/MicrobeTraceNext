import { NoopAnimationPlayer } from '@angular/animations';
import { ContactVenue } from './contact-venue';
import { Bool } from './enums';
import { CaseContactType } from './case-contact-type';
import { Location } from './location';
import { VacinationDetails } from './vacination-details';

export class ContactTracing{
  public IsKnownCase: boolean;
  public CDC2019nCovID: string; 
  public SystemID: string = "";
  public Lastname: string;
  public Firstname: string;
  public Middlename: string;
  public RelationtoCase: string;
  public TypeOfContact: string;
  public IllnessOutcome: string;
  public GetTested: Bool;
  public PhoneNumber: string;
  public Address: Location;
  public Email: string;
  public UnknownPhone: boolean;
  public UnknownAddress: boolean
  public UnknownEmail: boolean;
  public Description: string;
  public ContactVenue: ContactVenue[] = new Array();
  public IsHouseHoldContact: boolean;
  public IsCommunityAssociatedContact: boolean;
  public IsHealthcareAssociatedContact: boolean;
  public USCase: Bool;
  public PartOfOutbreak: Bool;
  public OutbreakName: string;
  public Sex: string;
  public AgeRange: number;
  public VacinationDetails: VacinationDetails;

  constructor() {
    this.ContactVenue.push(new ContactVenue());
    this.Address = new Location();
    this.VacinationDetails = new VacinationDetails();

  }
}
