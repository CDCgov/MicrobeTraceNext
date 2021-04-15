import { Component, OnInit, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { Section2, Section1 } from '../DTO/section';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { PersonStatus, ReasonForClassification, Bool, SpecimenCollectionType, VacinationType } from '../DTO/enums';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { Router, Data } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section2: Section2;
  PersonStatus: typeof PersonStatus = PersonStatus;
  ReasonForClassification: typeof ReasonForClassification = ReasonForClassification;
  ShowHospitalizedSection: boolean = false;
  Bool: typeof Bool = Bool;
  SpecimenCollectionType: typeof SpecimenCollectionType = SpecimenCollectionType;
  VacinationType: typeof VacinationType = VacinationType;
  today = new Date();
  isNew: boolean = true;
  currentCheckedValue;
  //Form Validation
  matcher = new CustomStateMatcher();


  //Date
  CDCReportDate:  Date;
  CollectionDate: Date;
  HAdmissionDate: Date;
  HDischargeDate: Date;
  IAdmissionDate: Date;
  IDischargeDate: Date;
  DeathDate: Date;
  VacinationDate: Date;
  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, public staticData: DropdownStaticDataService, private route: Router, private modal: MatDialog, private ren: Renderer2) {
    this.today.setDate(this.today.getDate());

  }
  deathInfoFormInvalid: boolean = false;

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section2 == undefined) {

      this.MicrobeTraceData.Section2 = new Section2();
      this.Section2 = this.MicrobeTraceData.Section2;

    } else {
      this.Section2 = this.MicrobeTraceData.Section2;

      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }

      //Reinit Date Proerties

      this.ReinitDate();
    }

    if (this.Section2.Saved != true) {
      this.Section2.Saved = false;
    }
  }

  ReinitDate() {

    if (this.Section2.CaseClassification.CDCReportDate) {
      let date = this.Section2.CaseClassification.CDCReportDate;
      this.CDCReportDate = new Date(date);
    }

    if (this.Section2.CaseClassification.PositiveSpecimenCollection.CollectionDate) {
      let date = this.Section2.CaseClassification.PositiveSpecimenCollection.CollectionDate;
      this.CollectionDate = new Date(date);
    }

    if (this.Section2.CaseClassification.VacinationDetails.VacinationDate) {
      let date = this.Section2.CaseClassification.VacinationDetails.VacinationDate;
      this.VacinationDate = new Date(date);
    }

    if (this.Section2.HospitalizationInformation.Hospitalized.AdmissionDate) {
      let date = this.Section2.HospitalizationInformation.Hospitalized.AdmissionDate;
      this.HAdmissionDate = new Date(date);
    }

    if (this.Section2.HospitalizationInformation.Hospitalized.DischargeDate) {
      let date = this.Section2.HospitalizationInformation.Hospitalized.DischargeDate;
      this.HDischargeDate = new Date(date);
    }
    if (this.Section2.HospitalizationInformation.ICUAdmitted.AdmissionDate) {
      let date = this.Section2.HospitalizationInformation.ICUAdmitted.AdmissionDate;
      this.IAdmissionDate = new Date(date);
    }
    if (this.Section2.HospitalizationInformation.ICUAdmitted.DischargeDate) {
      let date = this.Section2.HospitalizationInformation.ICUAdmitted.DischargeDate;
      this.IDischargeDate = new Date(date);
    }

    if (this.Section2.HospitalizationInformation.DeathInfo.DeathDate) {
      let date = this.Section2.HospitalizationInformation.DeathInfo.DeathDate;
      this.DeathDate = new Date(date);
    }
   
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section2 = this.Section2;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section2.Saved == false) {
      this.MicrobeTraceData.Section2 = this.Section2;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }

  }
  UpdateDateData() {
    if (this.Section2.CaseClassification.PositiveSpecimenCollection.CollectionDate) {
      this.Section2.CaseClassification.PositiveSpecimenCollection.Type = SpecimenCollectionType.Date;
    } else {
      this.Section2.CaseClassification.PositiveSpecimenCollection.Type = undefined;
    }
    this.UpdateData();
  }

  UpdateData() {
    this.Section2.Saved = false;
    console.log(this.Section2);
  }
  SaveData() {
    //Save to local storage
    this.Section2.Saved = true;
    this.MicrobeTraceData.Section2 = this.Section2;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section3']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section2 = new Section2()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section2 = this.dataService.MicrobeTraceData.Section2;
    this.ClearDate();
  }

  DeathInfoFormChange(deathInfoForm: any) {
    console.log(deathInfoForm);
  }

  ClearAllData() {

    let info: ModalData = new ModalData("Are you sure you want to clear data from all sections?", "Yes", "Warning", "Cancel");

    const dialogRef = this.modal.open(BooleanModalComponent, {
      width: '500px',
      data: info,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if (result == true) {
        if (this.isNew == false) {
          this.MicrobeTraceData.SystemID = undefined;
          this.MicrobeTraceData.ParentSystemID = undefined;
        }

        this.MicrobeTraceData.BlockName = undefined;
        this.MicrobeTraceData.BlockID = undefined;
        this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
        this.Section2 = new Section2();
        this.MicrobeTraceData.Section2 = undefined;
        this.MicrobeTraceData.Section3 = undefined;
        this.MicrobeTraceData.Section4 = undefined;
        this.MicrobeTraceData.Section5 = undefined;
        this.MicrobeTraceData.Section6 = undefined;
        this.MicrobeTraceData.Section7 = undefined;
        this.MicrobeTraceData.Section8 = undefined;
        this.MicrobeTraceData.BlockID = undefined;
        this.MicrobeTraceData.BlockName = undefined;
        this.dataService.update(this.MicrobeTraceData);

        this.route.navigate(['/form/section1']);   
      }


    });

  }
  RadioChange(el) {
    setTimeout(() => {
      if (this.currentCheckedValue && this.currentCheckedValue === el.value) {
        el.checked = false;
        this.ren.removeClass(el['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(el['_elementRef'].nativeElement, 'cdk-program-focused');
        this.currentCheckedValue = undefined;
        this.Section2.CaseClassification.PositiveSpecimenCollection.Type = undefined;
      } else {
        this.currentCheckedValue = el.value
      }
    })
  }


  //DateChange

  UpdateCDCReportDate() {

    if (this.CDCReportDate != undefined) {
      this.Section2.CaseClassification.CDCReportDate = this.CDCReportDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.CaseClassification.CDCReportDate = undefined;
    }

    this.UpdateData();

  }
  UpdateCollectionDate() {

    if (this.CollectionDate != undefined) {
      this.Section2.CaseClassification.PositiveSpecimenCollection.CollectionDate = this.CollectionDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.CaseClassification.PositiveSpecimenCollection.CollectionDate = undefined;
    }

    this.UpdateData();

  }
  UpdateHAdmissionDate() {

    if (this.HAdmissionDate != undefined) {
      this.Section2.HospitalizationInformation.Hospitalized.AdmissionDate = this.HAdmissionDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.HospitalizationInformation.Hospitalized.AdmissionDate = undefined;
    }

    this.UpdateData();

  }
  UpdateHDischargeDate() {

    if (this.HDischargeDate != undefined) {
      this.Section2.HospitalizationInformation.Hospitalized.DischargeDate = this.HDischargeDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.HospitalizationInformation.Hospitalized.DischargeDate = undefined;
    }

    this.UpdateData();

  } UpdateIAdmissionDate() {

    if (this.IAdmissionDate != undefined) {
      this.Section2.HospitalizationInformation.ICUAdmitted.AdmissionDate = this.IAdmissionDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.HospitalizationInformation.ICUAdmitted.AdmissionDate = undefined;
    }

    this.UpdateData();

  } UpdateIDischargeDate() {

    if (this.IDischargeDate != undefined) {
      this.Section2.HospitalizationInformation.ICUAdmitted.DischargeDate = this.IDischargeDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.HospitalizationInformation.ICUAdmitted.DischargeDate = undefined;
    }

    this.UpdateData();

  } UpdateDeathDate() {

    if (this.DeathDate != undefined) {
      this.Section2.HospitalizationInformation.DeathInfo.DeathDate = this.DeathDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.HospitalizationInformation.DeathInfo.DeathDate = undefined;
    }

    this.UpdateData();

  }
  UpdateVacinationDate() {

    if (this.VacinationDate != undefined) {
      this.Section2.CaseClassification.VacinationDetails.VacinationDate = this.VacinationDate.toLocaleDateString('en-US');
    }
    else {
      this.Section2.CaseClassification.VacinationDetails.VacinationDate = undefined;
    }

    this.UpdateData();

  }
  ClearDate() {
    this.CDCReportDate = undefined;
    this.CollectionDate = undefined;
    this.HAdmissionDate = undefined;
    this.HDischargeDate = undefined;
    this.IAdmissionDate = undefined;
    this.IDischargeDate = undefined;
    this.DeathDate = undefined;
    this.VacinationDate = undefined;
  }

}
