import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { ApplicationDataService } from '../services/application-data.service';
import { Observable } from 'rxjs';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { Section1 } from '../DTO/section';
import { NgForm } from '@angular/forms';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { ISectionComponent } from '../DTO/section-component';
import { Router, Data } from '@angular/router';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { HttpClient } from '@angular/common/http';
import { GenerateIDResponse } from '../DTO/API-DTO/GenerateIDResponse';
import { GenerateIDRequest } from '../DTO/API-DTO/GenerateIDRequest';
import { UserProfile } from '../DTO/user-profile';
import { BPaaSInfo } from '../DTO/bpass-information';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit, OnDestroy, ISectionComponent {

  // canDeactivate():boolean{
  //   return this.Section1.Saved;
  // }
  // @HostListener('window:unload', [ '$event' ])
  // unloadHandler($event) {
  //   // ...
  //       // ...

  // }

  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section1.Saved == false) {
      this.MicrobeTraceData.Section1 = this.Section1;
      this.dataService.update(this.MicrobeTraceData);

      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }


  }

  MicrobeTraceDataSubscription;
  PromptQuestionSubscription;
  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  Section1: Section1;
  Confirmed: boolean = false;
  PromptQuestion: boolean = this.dataService.PromptLoginQuestion;
  today = new Date();
  isSaveRequested: boolean = false;
  //Form Validation
  matcher = new CustomStateMatcher();
  httpClient: HttpClient;
  baseUrl: string;
  isLoading = false;
  covid_state: string;
  covid: string;
  isNew: boolean = true;
  IsManual: boolean;
  DateOfBirth: Date;
  constructor(private dataService: ApplicationDataService, public staticData: DropdownStaticDataService, private clientsideStorage: ClientsideStorageService, private modal: MatDialog, private route: Router, public regex: RegexPatternsService, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {

    this.httpClient = http;
    this.baseUrl = _baseUrl;


    if (dataService == undefined) {
      dataService = new ApplicationDataService();
    }

    this.today.setDate(this.today.getDate());

  }

  ngOnInit(): void {


    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });

    this.PromptQuestionSubscription = this.dataService.PromptQuestionChange.subscribe(data => {
      this.PromptQuestion = data;
    })

    this.covid_state = this.MicrobeTraceData.UserProfile.Jurisdiction;

    console.log("Init Section 1");

    if (this.MicrobeTraceData.Section1 == undefined) {
      console.log("MicrobeTraceData is undefined");


      this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
      this.Confirmed = true;
      this.Section1 = this.MicrobeTraceData.Section1;
      //Default is new
      this.Section1.PatientInformation.IsNewCase = this.isNew;

      this.dataService.PromptLoginQuestion = false;
      this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);
      this.GenerateID();

    } else {
      console.log(this.MicrobeTraceData);
      if (this.PromptQuestion) {

        if (this.IsCustomerData() == false) {

          let info: ModalData = new ModalData("Pick up from where you left off?", "Keep Data", "Hi, " + this.MicrobeTraceData.UserProfile.Firstname, "Start Over");
          let keepData: boolean = true;

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info
            , disableClose: true
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            console.log('The dialog was closed');
            keepData = result;
            console.log("From Sub: " + keepData);
            if (keepData == false) {
              this.ClearAllSectionsData();
              this.dataService.update(this.MicrobeTraceData);
              this.clientsideStorage.SaveData(this.MicrobeTraceData);
              if (this.MicrobeTraceData.SystemID == undefined) {
                this.GenerateID();
              }
            }

            if (this.MicrobeTraceData.BlockID) {
              this.isNew = false;
            }

            this.Section1 = this.MicrobeTraceData.Section1;
            console.log("Saved:" + this.Section1.Saved);

            //Default is new

            this.Section1.PatientInformation.IsNewCase = this.isNew;


            //Reinit Date Proerties

            console.log(this.Section1.PatientInformation.DateOfBirth);
            if (this.Section1.PatientInformation.DateOfBirth) {
              let dob = this.Section1.PatientInformation.DateOfBirth;
              this.DateOfBirth = new Date(dob);

            }

            this.GetUniqueId();
            this.Confirmed = true;

            this.dataService.PromptLoginQuestion = false;
            this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);

          });

        } else {
          this.Section1 = this.MicrobeTraceData.Section1;
          console.log("Saved:" + this.Section1.Saved);

          if (this.MicrobeTraceData.BlockID) {
            this.isNew = false;
          }

          //Default is new

          this.Section1.PatientInformation.IsNewCase = this.isNew;

          //Reinit Date Proerties

          if (this.Section1.PatientInformation.DateOfBirth) {
            let dob = this.Section1.PatientInformation.DateOfBirth;
            this.DateOfBirth = new Date(dob);
          }
          this.GetUniqueId();
          this.Confirmed = true;

          this.dataService.PromptLoginQuestion = false;
          this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);
        }
      } else {

        this.Section1 = this.MicrobeTraceData.Section1;
        console.log("Saved:" + this.Section1.Saved);

        if (this.MicrobeTraceData.BlockID) {
          this.isNew = false;
        }

        //Default is new

        this.Section1.PatientInformation.IsNewCase = this.isNew;

        //Reinit Date Proerties

        if (this.Section1.PatientInformation.DateOfBirth) {
          let dob = this.Section1.PatientInformation.DateOfBirth;
          this.DateOfBirth = new Date(dob);
        }
        this.GetUniqueId();
        this.Confirmed = true;

      }


    }

    if (this.Section1 != undefined && this.Section1.Saved != true) {
      this.Section1.Saved = false;
    }
  }

  GetUniqueId() {
    console.log("Inside GetUniqueId")
    console.log("New: " + this.isNew);
    console.log("SystemID: " + this.MicrobeTraceData.SystemID);

    if (this.isNew && this.MicrobeTraceData.SystemID == undefined) {
      this.GenerateID();
    } else {
      if (this.isNew && this.MicrobeTraceData.SystemID == this.Section1.PatientInformation.CDCInformation.CDC2019nCovID && this.Section1.PatientInformation.CDCInformation.CDC2019nCovID != undefined) {
        //Previously selected to auto generate
        this.IsManual = false;
      } else if (this.isNew && this.MicrobeTraceData.SystemID != this.Section1.PatientInformation.CDCInformation.CDC2019nCovID && this.Section1.PatientInformation.CDCInformation.CDC2019nCovID != undefined) {
        //Previously selected to manually enter

        var splitString = this.Section1.PatientInformation.CDCInformation.CDC2019nCovID.split(/(\d+)/);
        this.covid = splitString[1];
        this.covid_state = splitString[0];
        this.IsManual = true;


      }
    }
  }

  ngOnDestroy(): void {

    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    if (this.PromptQuestionSubscription)
      this.PromptQuestionSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section1 = this.Section1;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);


  }


  //Methods

  focusFields(event) {
    event.target.parentNode.classList.add('focused');
    event.target.classList.add('filled');
  }
  blurFields(event) {
    if (event.target.value == "") {
      event.target.classList.remove('filled');
      event.target.parentNode.classList.remove('focused');
    }
    else {
      event.target.classList.add('filled');
    }
  }
  UpdateFormData(data: any) {
    console.log(data);
  }
  UpdateData() {
    this.Section1.Saved = false;
  }



  SaveData() {

    
    //Save to local storage
    this.Section1.Saved = true;
    this.MicrobeTraceData.Section1 = this.Section1;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section2']);
 


  }


  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile)
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section1 = this.dataService.MicrobeTraceData.Section1;
    this.covid = undefined;
    //this.covid_state = undefined;
    this.IsManual = undefined;
    this.ClearDate();
  }
  ClearAllSectionsData() {
    this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
    this.MicrobeTraceData.Section2 = undefined;
    this.MicrobeTraceData.Section3 = undefined;
    this.MicrobeTraceData.Section4 = undefined;
    this.MicrobeTraceData.Section5 = undefined;
    this.MicrobeTraceData.Section6 = undefined;
    this.MicrobeTraceData.Section7 = undefined;
    this.MicrobeTraceData.Section8 = undefined;
    this.MicrobeTraceData.BlockID = undefined;
    this.MicrobeTraceData.BlockName = undefined;

    this.isNew = true;

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

        this.MicrobeTraceData.BlockName = undefined;
        this.MicrobeTraceData.BlockID = undefined;

        this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
        this.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
        this.covid = undefined;
        this.IsManual = undefined;
        this.ClearDate();
        this.MicrobeTraceData.Section2 = undefined;
        this.MicrobeTraceData.Section3 = undefined;
        this.MicrobeTraceData.Section4 = undefined;
        this.MicrobeTraceData.Section5 = undefined;
        this.MicrobeTraceData.Section6 = undefined;
        this.MicrobeTraceData.Section7 = undefined;
        this.MicrobeTraceData.Section8 = undefined;
        this.MicrobeTraceData.BlockID = undefined;
        this.dataService.update(this.MicrobeTraceData);

        if (this.isNew == false) {
          this.GenerateID();
        }

        this.isNew = true;



      }


    });

  }



  GenerateID() {
    console.log("Inside GenerateID");
    this.isLoading = true;
    let resp: GenerateIDResponse;

    try {

      let request: GenerateIDRequest = this.CreateBPaaSLedgerRequest();
      console.log(request);
      console.log(this.baseUrl);
      this.httpClient.post<GenerateIDResponse>(this.baseUrl + 'api/generateid', request).subscribe(result => {


        resp = result;

        console.log(resp);

        if (resp.success) {
          this.MicrobeTraceData.SystemID = resp.id;
          this.MicrobeTraceData.ParentSystemID = resp.id;
          this.dataService.update(this.MicrobeTraceData);

        } else {

          let info: ModalData = new ModalData("Error occured!! " + resp.message, "Close", "Error");

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info
          });

          this.isLoading = false;

        }




      }, error => {

        console.error(error);

        let info: ModalData = new ModalData("Unexpected rror occured!!", "Close", "Error");

        const dialogRef = this.modal.open(BooleanModalComponent, {
          width: '500px',
          data: info
        });

        this.isLoading = false;

      });


    } catch (ex) {
      console.log(ex);

      let info: ModalData = new ModalData("Unexpected rror occured!!", "Close", "Error");

      const dialogRef = this.modal.open(BooleanModalComponent, {
        width: '500px',
        data: info
      });

      this.isLoading = false;

    }

  }

  CreateBPaaSLedgerRequest(): GenerateIDRequest {

    let request: GenerateIDRequest = new GenerateIDRequest();
    let user: UserProfile = this.MicrobeTraceData.UserProfile;
    let BPaaSData: BPaaSInfo = this.MicrobeTraceData.UserProfile.BPaasInfo;

    request.tenantID = BPaaSData.TenantID;
    request.userID = BPaaSData.UserID;
    request.updatedByUserId = BPaaSData.UserID;
    request.ledgerName = BPaaSData.LedgerName;
    request.state = user.Jurisdiction;
    return request;
  }

  GenerateSystemCoVId() {
    this.Section1.PatientInformation.CDCInformation.CDC2019nCovID = this.MicrobeTraceData.SystemID;
    this.UpdateData();
  }

  GenerateManualCoVId(form: NgForm) {
    if (form.invalid == false && this.covid_state != undefined && this.covid != undefined) {
      this.Section1.PatientInformation.CDCInformation.CDC2019nCovID = this.covid_state + this.covid;
    }
    this.UpdateData();
  }

  CheckID(form: NgForm) {
    if (this.IsManual) {
      this.GenerateManualCoVId(form);
    } else {
      this.GenerateSystemCoVId();
    }
    this.UpdateData();
  }

  IsEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  IsCustomerData(): boolean {

    if (this.MicrobeTraceData.Section1 && this.MicrobeTraceData.Section1.Saved != undefined) {
      if (this.MicrobeTraceData.Section1.PatientInformation.Firstname || this.MicrobeTraceData.Section1.PatientInformation.Lastname || this.MicrobeTraceData.Section1.PatientInformation.State || this.MicrobeTraceData.Section1.PatientInformation.DateOfBirth) {
        return false;
      } else if (!this.IsEmpty(this.MicrobeTraceData.Section1.PatientInformation.CDCInformation)) {
        return false;
      }
    }
    if (this.MicrobeTraceData.Section2 && this.MicrobeTraceData.Section2.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section3 && this.MicrobeTraceData.Section3.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section4 && this.MicrobeTraceData.Section4.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section5 && this.MicrobeTraceData.Section5.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section6 && this.MicrobeTraceData.Section6.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section7 && this.MicrobeTraceData.Section7.Saved != undefined) {
      return false;
    } else if (this.MicrobeTraceData.Section8 && this.MicrobeTraceData.Section8.Saved != undefined) {
      return false;
    }


    return true;
  }

  UpdateDOB() {

    if (this.DateOfBirth != undefined) {
      this.Section1.PatientInformation.DateOfBirth = this.DateOfBirth.toLocaleDateString('en-US');
    }
    else {
        this.Section1.PatientInformation.DateOfBirth = undefined;
    }

    this.UpdateData();

  }
  ClearDate() {
    this.DateOfBirth = undefined;
  }
  }
