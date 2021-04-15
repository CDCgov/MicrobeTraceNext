import { PersonStatus, ReasonForClassification, SpecimenCollectionType} from './enums';
import { CaseIdentificationProcess } from './case-dentification-process';
import { PositiveSpecimenCollection } from './positive-specimen-collection';
import { VacinationDetails } from './vacination-details';

export class CaseClassification{
  public Status: PersonStatus;
  public ReasonForClassification: ReasonForClassification;
  public CaseIdProcess: CaseIdentificationProcess;
  public CDCReportDate: string;
  public PositiveSpecimenCollection: PositiveSpecimenCollection;
  public VacinationDetails: VacinationDetails
  constructor(){
  this.CaseIdProcess = new CaseIdentificationProcess();
    this.PositiveSpecimenCollection = new PositiveSpecimenCollection();
    this.VacinationDetails = new VacinationDetails();
  }
}
