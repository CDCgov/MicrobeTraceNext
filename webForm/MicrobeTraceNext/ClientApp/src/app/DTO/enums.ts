export enum Sections{
  One = <any> "1",
  Two= <any> "2",
  Three= <any> "3",
  Four= <any> "4",
  Five= <any> "5",
  Six= <any> "6",
  Seven= <any> "7",
  Eight= <any> "8"
}

export enum PersonStatus{
  LabConfirmed = <any> "Lab Confirmed Case",
  ProbableCase = <any> "Probable Case"
}

export enum ReasonForClassification{
  ClinicalCriteria = <any> "Meets clinical criteria AND epidemiologic evidence with no confirmatory lab testing",
  LabEvidence = <any> "Meets presumptive lab evidence AND either clinical criteria OR epidemiologic evidence",
  ViralRecord = <any> "Meets vital records criteria with no confirmatory lab testing"
}

export enum SpecimenCollectionType{
Unknown= <any> "Unknown",
NA= <any> "N/A",
Date= <any> "Date"
}

export enum Bool{
  Yes= <any> "Yes",
  No= <any> "No",
  Unknown = <any>"Unknown",
  NotApplicable = <any>"Not Applicable"
}

export enum AgeUnit{
//What is this?
}

export enum Sex{
  Male= <any> "Male",
  Female= <any> "Female"
}
export enum Race{
  White= <any> "White",
  Black= <any> "Black",
  Asian= <any> "Asian",
  AmericanIndian= <any> "American Indian",
  PacificIslander= <any> "Pacific Islander",
  Hispanic= <any> "Hispanic",
  Unknown= <any> "Unknown",
  Other= <any> "Other"
}

export enum PatientPlace{
  Home= <any> "Home",
  Hospital= <any> "Hospital",
  Other= <any> "Other"
}

export enum Occupation{
  Doctor= <any> "Doctor",
  Nurse= <any> "Nurse"
}

export enum JobSetting{
  //WHAT?
}

export enum ContactType{
  KnownCase= <any> "Known Case",
  HouseHold= <any> "Household",
  Community= <any> "Community",
  HealthCare= <any> "Healthcare"
}

export enum DataCollectionSource{
  Patient= <any> "Talk to Patient",
  MedicalRecord= <any> "Read Medical Record"
}

export enum RT_PCR{

}

export enum Serologic{

}

export enum SearchBy {
  nCoVID,
  nCoVIDAndLastName

}

export enum VacinationType {
  Unknown = <any> "Vacinated with unknown date",
  No = <any> "Not Vacinated",
  Date = <any> "Vacinated with date"
}