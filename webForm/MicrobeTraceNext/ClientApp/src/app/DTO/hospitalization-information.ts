import { Bool } from './enums';
import { TranslatorInformation } from './transalator-information';
import {HospitalizedDetail} from './hospital-detail';
import { DeathInformation } from './death-information';
export class HospitalizationInformation{
public Hospitalized: HospitalizedDetail;
public TranslatiorRequired: TranslatorInformation;
public ICUAdmitted:HospitalizedDetail;
public DeathInfo: DeathInformation;
constructor(){
  this.Hospitalized = new HospitalizedDetail();
  this.TranslatiorRequired = new TranslatorInformation();
  this.ICUAdmitted = new HospitalizedDetail();
  this.DeathInfo = new DeathInformation();
}
}
