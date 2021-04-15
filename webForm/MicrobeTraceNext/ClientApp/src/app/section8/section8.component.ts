import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Section8, Section1 } from '../DTO/section';
import { AddToBlockchainLedgerDTOClient, AddToBlockchainLedgerResponseDTO, AddToBlockchainLedgerDTO, Accept, Stream } from '../services/bpaas-ledger-services-proxy';
import { environment } from '../../environments/environment';
import { BPaaSInfo } from '../DTO/bpass-information';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { UserProfile } from '../DTO/user-profile';
import { HttpClient } from '@angular/common/http';
import { AddBlockDto } from '../DTO/API-DTO/AddBlockDto';
import { AddBlockResponse } from '../DTO/API-DTO/AddBlockResponse';
import { now } from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { ModalData, ModalListData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { Router } from '@angular/router';
import { ListModalComponent } from '../list-modal/list-modal.component';
import { DownloadFilterBlock } from '../DTO/API-DTO/DownloadFilterBlock';
import { DownloadFilterBlockResponse } from '../DTO/API-DTO/DownloadFilterBlockResponse';



@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.css']
})
export class Section8Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section8: Section8;
  isLoading: boolean = false;
  httpClient: HttpClient;
  baseUrl: string;
  ButtonMsg: string = "Submit";
  isNew: boolean = true;
  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private modal: MatDialog, private route: Router) {

    this.httpClient = http;
    this.baseUrl = _baseUrl;

  }

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });
   

    if (this.MicrobeTraceData.Section8 == undefined) {

      this.MicrobeTraceData.Section8 = new Section8();
      this.Section8 = this.MicrobeTraceData.Section8;

    } else {
      this.Section8 = this.MicrobeTraceData.Section8;

      if (this.MicrobeTraceData.BlockID) {
        this.ButtonMsg = "Modify";
        this.isNew = false;
      }
    }

    if (this.Section8.Saved != true) {
      this.Section8.Saved = false;
    }

  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section8 = this.Section8;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section8.Saved == false) {
      this.MicrobeTraceData.Section8 = this.Section8;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);

    }
  }

  UpdateData() {
    this.Section8.Saved = false;
  }
  SaveData() {
    //Save to local storage

    this.Section8.Saved = true;
    this.MicrobeTraceData.Section8 = this.Section8;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);


    //Submit to ledger!
  }

  ClearData() {
    //Save to local storage

    this.MicrobeTraceData.Section8 = new Section8()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section8 = this.dataService.MicrobeTraceData.Section8;
  }


  Submit() {
    console.log("Inside Submit");

    this.isLoading = true;

    let Validated: boolean = this.ValidateData();

    if (Validated == false) {
      this.isLoading = false;
      return;
    } else {
      let message;
      let header;
      if (this.isNew) {
        message = "Are you sure you want to submit the record to the ledger?";
        header = "Confirm Submission"
      } else {
        message = "Are you sure you want to modity the record?";
        header = "Confirm Modification"

      }

      let info: ModalData = new ModalData(message, "Yes", header, "No");

      const dialogRef = this.modal.open(BooleanModalComponent, {
        width: '500px',
        data: info,
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {

        if (result == true) {
          this.ContinueToSubmit();
        }
        else {
          this.isLoading=false;
          return;

        }
      });


    }

  }

  ContinueToSubmit() {


    this.MicrobeTraceData.Section8 = this.Section8;
    let resp: AddBlockResponse;
    let fuzzyResp: DownloadFilterBlockResponse;
    try {

      let request: AddBlockDto = this.CreateBPaaSLedgerRequest();
      console.log(request);
      console.log(this.baseUrl);

      this.httpClient.post<AddBlockResponse>(this.baseUrl + 'api/addblock', request).subscribe(result => {


        resp = result;

        console.log(resp);

        if (resp.success) {

          console.log("Pop up");
          this.ClearAllSystemData();
          console.log("After clear sections");
          this.clientsideStorage.SaveData(this.MicrobeTraceData);
          console.log("After SaveData");
          console.log(this.MicrobeTraceData);

          let message;

          if (this.isNew)
            message = "Case Report has successfully been recorded.";
          else {
            message = "Case Report has successfully been updated.";

            //Clearing out search resut since the record has been updated
            this.dataService.SearchResult = undefined;
            this.dataService.updateSearch(undefined);
          }


          let info: ModalData = new ModalData(message, "Ok", "Success");

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info,
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(result => {

            this.isLoading = false;
            this.route.navigate(['/investigate']);


          });

        } else {
          let message;

          if (this.isNew)
            message = resp.message;
          else
            message = "Fail to update Case Report. Please try again.";


          let info: ModalData = new ModalData("Error occured!! " + message, "Close", "Error");

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info
          });

          this.isLoading = false;

        }

      }, error => {

        console.error(error);

        let info: ModalData = new ModalData("Unexpected error occured!!", "Close", "Error");

        const dialogRef = this.modal.open(BooleanModalComponent, {
          width: '500px',
          data: info
        });

        this.isLoading = false;

      });


    } catch (ex) {
      console.log(ex);

      let info: ModalData = new ModalData("Unexpected error occured!!", "Close", "Error");

      const dialogRef = this.modal.open(BooleanModalComponent, {
        width: '500px',
        data: info
      });

      this.isLoading = false;

    }

  }

  CreateFuzzyDownloadRequest(): DownloadFilterBlock {

    let request: DownloadFilterBlock = new DownloadFilterBlock();
    let user: UserProfile = this.MicrobeTraceData.UserProfile;
    let BPaaSData: BPaaSInfo = this.MicrobeTraceData.UserProfile.BPaasInfo;

    request.tenantID = BPaaSData.TenantID;
    request.userID = BPaaSData.UserID;
    request.ledgerName = BPaaSData.LedgerName;
    request.blockProofHash = this.MicrobeTraceData.BlockID;
    request.blockchainProofHash = BPaaSData.BlockchainProofHash;

    let shortenData: MicrobeTraceData = new MicrobeTraceData();
    shortenData.Section1 = this.MicrobeTraceData.Section1;
    shortenData.Section3 = this.MicrobeTraceData.Section3;

    request.puiInfo = JSON.stringify(shortenData);
    return request;
  }

  CreateBPaaSLedgerRequest(): AddBlockDto {

    let request: AddBlockDto = new AddBlockDto();
    let user: UserProfile = this.MicrobeTraceData.UserProfile;
    let BPaaSData: BPaaSInfo = this.MicrobeTraceData.UserProfile.BPaasInfo;

    if (this.isNew) {
      this.MicrobeTraceData.IsDuplicated = false;
      this.MicrobeTraceData.IsProcessed = false;
    }

    request.tenantID = BPaaSData.TenantID;
    request.userID = BPaaSData.UserID;
    //request.requestingUserID = BPaaSData.RequestingUserID;
    request.updatedByUserId = BPaaSData.UserID;
    //request.dateTimeStamp = new Date();
    request.ledgerName = BPaaSData.LedgerName;
    request.isFile = false;
    request.fileExtension = null;
    request.saveTextAsFile = false;
    request.isSmartContract = false;
    request.blockName = (this.MicrobeTraceData.BlockName) ? this.MicrobeTraceData.BlockName : this.MicrobeTraceData.SystemID;
    request.blockDescription = this.MicrobeTraceData.Section1.PatientInformation.CDCInformation.CDC2019nCovID;
    request.blockProofHash = this.MicrobeTraceData.BlockID;
    request.blockchainProofHash = BPaaSData.BlockchainProofHash;
    request.isActive = false;
    //request.bPAASToken = environment.BPaasLedgerToken;
    //request.bPAASRoles = BPaaSData.BPaaSRole;
    console.log(this.MicrobeTraceData);
    request.body = JSON.stringify(this.MicrobeTraceData);
    return request;


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
        this.MicrobeTraceData.BlockID = undefined;
        this.MicrobeTraceData.BlockName = undefined;

        this.MicrobeTraceData.Section1 = new Section1(this.MicrobeTraceData.UserProfile);
        this.Section8 = new Section8();
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

 
  ClearAllSystemData() {

    this.MicrobeTraceData.SystemID = undefined;
    this.MicrobeTraceData.ParentSystemID = undefined;

    this.MicrobeTraceData.BlockID = undefined;
    this.MicrobeTraceData.BlockName = undefined;

    this.MicrobeTraceData.Section1 = undefined
    this.Section8 = new Section8();
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
  }

  ValidateData(): boolean {
    let errors: string[] = new Array();

    if (this.MicrobeTraceData.Section1 == undefined) {
      errors.push("Section 1 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section1.Saved) {
      errors.push("Section 1 has not been saved.");
    }
    if (this.MicrobeTraceData.Section2 == undefined) {
      errors.push("Section 2 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section2.Saved) {
      errors.push("Section 2 has not been saved.");
    }
    if (this.MicrobeTraceData.Section3 == undefined) {
      errors.push("Section 3 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section3.Saved) {
      errors.push("Section 3 has not been saved.");
    }
    if (this.MicrobeTraceData.Section4 == undefined) {
      errors.push("Section 4 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section4.Saved) {
      errors.push("Section 4 has not been saved.");
    }
    if (this.MicrobeTraceData.Section5 == undefined) {
      errors.push("Section 5 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section5.Saved) {
      errors.push("Section 5 has not been saved.");
    }
    if (this.MicrobeTraceData.Section6 == undefined) {
      errors.push("Section 6 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section6.Saved ) {
      errors.push("Section 6 has not been saved.");
    }
    if (this.MicrobeTraceData.Section7 == undefined) {
      errors.push("Section 7 has not been completed.");
    }
    else if (!this.MicrobeTraceData.Section7.Saved) {
      errors.push("Section 7 has not been saved.");
    }

    if (errors.length > 0) {
      let info: ModalListData = new ModalListData(errors, "Close", "Validation Error");

      const dialogRef = this.modal.open(ListModalComponent, {
        width: '500px',
        data: info
      });

      return false;
    } else {
      return true;

    }

  }

}
