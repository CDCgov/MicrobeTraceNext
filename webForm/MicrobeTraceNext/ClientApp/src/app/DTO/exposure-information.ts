import { Bool } from './enums';
import { CaseContactType } from './case-contact-type';
import { Location } from './location';

export class ExposureInformation {
  public DomesticTraveled: boolean;
  public DemesticDestinations: string[];
  public DomesticTraveledDate: string;
  public UnknownDomesticTraveledDate : boolean;

  public InternationalTraveled: boolean;
  public InternationalDestinations: string[];
  public InternationalTraveledDate: string;
  public UnknownInternationalTraveledDate: boolean;

  public CruiseShipTraveld: boolean;
  public CruiseShipName: string;
  public CruiseShipTraveldDate: string;
  public UnknownCruiseShipTraveldDate: boolean;


  public WorkPlaceExposed: boolean;
  public WorkPlaceCritical: Bool;
  public WorkPlaceSetting: Location;
  public WorkPlaceExposedDate: string;
  public UnknownWorkPlaceExposedDate: boolean;


  public Airport: boolean;
  public AirportInfo: Location;
  public AirportExposureDate: string;
  public UnknownAirportExposureDate: boolean;



  public AdultLivingFacility: boolean;
  public AdultLivingFacilityInfo: Location;
  public AdultLivingFacilityExposureDate: string;
  public UnknownAdultLivingFacilityExposureDate: boolean;


  public School: boolean;
  public SchoolInfo: Location;
  public SchoolExposureDate: string;
  public UnknownSchoolExposureDate: boolean;



  public CorrectionalFacility: boolean;
  public CorrectionalFacilityInfo: Location;
  public CorrectionalFacilityExposureDate: string;
  public UnknownCorrectionalFacilityExposureDate: boolean;



  public CommunityEvent: boolean;
  public CommunityEventInfo: Location;
  public CommunityEventExposureDate: string;
  public UnknownCommunityEventExposureDate: boolean;



  public CovidAnimal: boolean;
  public CovidAnimalExposureDate: string;
  public AnimalSpecify: string;
  public UnknownCovidAnimalExposureDate: boolean;


  public UnknownExposure: boolean;
  public UnknownExposureDate: string;
  public UnknownUnknownExposureDate: boolean;


  public Other: boolean;
  public OtherSpecify: Location;
  public OtherExposureDate: string;
  public UnknownOtherExposureDate: boolean;



  constructor() {
    this.WorkPlaceSetting = new Location();
    this.AdultLivingFacilityInfo = new Location();
    this.AirportInfo = new Location();
    this.CorrectionalFacilityInfo = new Location();
    this.SchoolInfo = new Location();
    this.CommunityEventInfo = new Location();
    this.OtherSpecify = new Location();
  }

}
