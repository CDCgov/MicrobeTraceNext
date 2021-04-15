import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Router, Data } from '@angular/router';
import { Section5, Section1 } from '../DTO/section';
import { ContactTracing } from '../DTO/contact-tracing';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { ContactVenue } from '../DTO/contact-venue';
import { Bool, VacinationType } from '../DTO/enums';
import { UserProfile } from '../DTO/user-profile';
import { DownloadFilterBlockResponse } from '../DTO/API-DTO/DownloadFilterBlockResponse';
import { DownloadFilterBlock, Filters } from '../DTO/API-DTO/DownloadFilterBlock';
import { HttpClient } from '@angular/common/http';
import { BPaaSInfo } from '../DTO/bpass-information';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { AddressLocation } from '../DTO/AddressLocation';
@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section5: Section5;
  today = new Date();
  isNew: boolean = true;
  Bool: typeof Bool = Bool;
  VenueDates: Date[][] = new Array();
  isLoading: boolean;
  //Form Validation
  matcher = new CustomStateMatcher();
  DefaultCountry: string = "US";
  httpClient: HttpClient;
  baseUrl: string;
  VacinationDate: Date[] = new Array();
  VacinationType: typeof VacinationType = VacinationType;


  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, private route: Router, public staticData: DropdownStaticDataService, public regex: RegexPatternsService, private modal: MatDialog, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.today.setDate(this.today.getDate());
    this.httpClient = http;
    this.baseUrl = _baseUrl;
}

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section5 == undefined) {

      this.MicrobeTraceData.Section5 = new Section5();
      this.Section5 = this.MicrobeTraceData.Section5;
      this.VenueDates.push(new Array());

    } else {
      this.Section5 = this.MicrobeTraceData.Section5;
      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }
      this.ReInitDate();
    }
    if (this.Section5.Saved != true) {
      this.Section5.Saved = false;
    }
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section5 = this.Section5;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section5.Saved == false) {
      this.MicrobeTraceData.Section5 = this.Section5;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }

  }
  ReInitDate() {
    if (this.Section5.ContactTracings != undefined && this.Section5.ContactTracings.length > 0) {

      console.log(this.Section5.ContactTracings);

      for (let contact of this.Section5.ContactTracings) {

        console.log(contact);

        let dates: Date[] = new Array();

        for (let venue of contact.ContactVenue)
        {
          if (venue.DateOfContact) {
            let date = venue.DateOfContact;
            dates.push(new Date(date));
          } else {
            dates.push(undefined);
          }
        }
        this.VenueDates.push(dates);

        if (contact.VacinationDetails != undefined && contact.VacinationDetails.VacinationDate) {
          let date = contact.VacinationDetails.VacinationDate;
          this.VacinationDate.push(new Date(date));
        } else {
          this.VacinationDate.push(undefined);
        }
       
      }
    }

    console.log(this.VenueDates);
  }
  AddContact() {
    this.Section5.ContactTracings.push(new ContactTracing());
    this.VenueDates.push(new Array());
    this.VacinationDate.push(undefined);
    this.UpdateData()
  }

  AddNewContact() {
    this.Section5.ContactTracings = new Array(new ContactTracing());
    this.VenueDates = new Array(new Array());
    this.VacinationDate = new Array();
    this.UpdateData()
  }
  RemoveContact() {
    this.Section5.ContactTracings.splice(this.Section5.ContactTracings.length - 1);
    this.VenueDates.splice(this.VenueDates.length - 1);
    this.VacinationDate.splice(this.VacinationDate.length - 1);
    this.UpdateData();
  }
  UpdateData() {
    this.Section5.Saved = false;
    console.log(this.Section5);
  }
  UpdateDateData(event: any) {
    this.Section5.Saved = false;
    console.log(this.Section5);
  }
  SaveData() {
    //Save to local storage
    this.Section5.Saved = true;
    this.MicrobeTraceData.Section5 = this.Section5;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section6']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section5 = new Section5()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section5 = this.dataService.MicrobeTraceData.Section5;
    this.ClearDate();

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
        this.Section5 = new Section5();
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

  AddVenue(contact: ContactTracing, i:number) {
    contact.ContactVenue.push(new ContactVenue());
    this.VenueDates[i].push(undefined);
    this.UpdateData();
  }

  ClearPhone(i: number) {
    if (this.Section5.ContactTracings[i].PhoneNumber != undefined && this.Section5.ContactTracings[i].PhoneNumber.length < 3) {
      this.Section5.ContactTracings[i].PhoneNumber = undefined;
    }
  }

  UpdateDate(i: number, j: number) {
    if (this.VenueDates[i][j] != undefined) {
      this.Section5.ContactTracings[i].ContactVenue[j].DateOfContact = this.VenueDates[i][j].toLocaleDateString('en-US');
    } else {
      this.Section5.ContactTracings[i].ContactVenue[j].DateOfContact = undefined;
    }
    this.UpdateData();
  }
  ClearDate() {
    this.VenueDates = new Array();
    this.VenueDates.push(new Array());
    this.VacinationDate = new Array();
    this.VacinationDate.push(undefined);
  }

  UpdateVacinationDate(i: number) {
    if (this.VacinationDate[i] != undefined) {
      this.Section5.ContactTracings[i].VacinationDetails.VacinationDate = this.VacinationDate[i].toLocaleDateString('en-US');
    } else {
      this.Section5.ContactTracings[i].VacinationDetails.VacinationDate = undefined;
    }
    this.UpdateData();
  }


  CheckCoVId(isInvalid: boolean, i: number) {
    console.log(i);
    console.log(this.Section5.ContactTracings);
    this.ClearContactData(i);

    if (isInvalid != false || !this.Section5.ContactTracings[i].CDC2019nCovID) {
      return;
    }
    console.log("Inside check covid");
    this.isLoading = true;
    let resp: DownloadFilterBlockResponse;
    try {

      let request: DownloadFilterBlock = this.CreateBPaaSLedgerRequest(this.Section5.ContactTracings[i].CDC2019nCovID);
      console.log(request);
      console.log(this.baseUrl);
      this.httpClient.post<DownloadFilterBlockResponse>(this.baseUrl + 'api/search', request).subscribe(result => {
        resp = result;
        console.log(resp);
        if (resp.success) {

          if (resp.searchResult != undefined && resp.searchResult.length > 0) {
            let data: MicrobeTraceData = JSON.parse(resp.searchResult[0].data);
            this.MapDataFromExitingRecord(data, i);
     
          } else {
            let info: ModalData = new ModalData("CDC 2019-nCoV ID: " + this.Section5.ContactTracings[i].CDC2019nCovID + "does not exists!" + resp.message, "Close", "Error");

            const dialogRef = this.modal.open(BooleanModalComponent, {
              width: '500px',
              data: info
            });

            this.Section5.ContactTracings[i].CDC2019nCovID = undefined;

          }

         this.isLoading = false;

        } else {
          let info: ModalData;

          if (resp.message.includes("Case Report could not be located.")) {
            info = new ModalData("Unable to find CDC 2019-nCoV ID: " + this.Section5.ContactTracings[i].CDC2019nCovID + "! " + resp.message, "Close", "Error");
          } else {
            info = new ModalData("Error occured!! " + resp.message, "Close", "Error");

          }
          this.Section5.ContactTracings[i].CDC2019nCovID = undefined;

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


  CreateBPaaSLedgerRequest(covId: string): DownloadFilterBlock {

    let request: DownloadFilterBlock = new DownloadFilterBlock();
    let user: UserProfile = this.MicrobeTraceData.UserProfile;
    let BPaaSData: BPaaSInfo = this.MicrobeTraceData.UserProfile.BPaasInfo;

    request.tenantID = BPaaSData.TenantID;
    request.userID = BPaaSData.UserID;
    request.ledgerName = BPaaSData.LedgerName;
    request.blockProofHash = this.MicrobeTraceData.BlockID;
    request.blockchainProofHash = BPaaSData.BlockchainProofHash;
    request.blockFilter = this.BuildSearchFilter(user, covId);
    return request;


  }

  BuildSearchFilter(userProfile: UserProfile, covId:string): Filters[] {

    let filters: Filters[] = new Array();


    let searchCriteria: Filters = new Filters("Section1.PatientInformation.CDCInformation.CDC2019nCovID", covId);
    filters.push(searchCriteria);


    return filters;
  }

  MapDataFromExitingRecord(record: MicrobeTraceData, i : number) {

    this.Section5.ContactTracings[i].SystemID = record.SystemID;

    if (record.Section1 != undefined && record.Section1.PatientInformation != undefined) {
      this.Section5.ContactTracings[i].Firstname = record.Section1.PatientInformation.Firstname;
      this.Section5.ContactTracings[i].Middlename = record.Section1.PatientInformation.Middlename;
      this.Section5.ContactTracings[i].Lastname = record.Section1.PatientInformation.Lastname;
    }

    if (record.Section3 != undefined && record.Section5.ContactTracings[i] != undefined) {
      this.Section5.ContactTracings[i].Address.StreetAddress = record.Section5.ContactTracings[i].Address.StreetAddress;
      this.Section5.ContactTracings[i].Email = record.Section5.ContactTracings[i].Email;
      if (record.Section5.ContactTracings[i].PhoneNumber != undefined) {
        this.Section5.ContactTracings[i].PhoneNumber = record.Section5.ContactTracings[i].PhoneNumber.toString();
      }
      this.Section5.ContactTracings[i].Address.Zipcode = record.Section5.ContactTracings[i].Address.Zipcode;
      this.Section5.ContactTracings[i].Address.State = record.Section5.ContactTracings[i].Address.State;
      this.Section5.ContactTracings[i].Sex = record.Section5.ContactTracings[i].Sex;
      this.Section5.ContactTracings[i].AgeRange = record.Section5.ContactTracings[i].AgeRange;
    }
  }

  ClearContactData(i: number) {

    let isKnown = this.Section5.ContactTracings[i].IsKnownCase;
    let covId = this.Section5.ContactTracings[i].CDC2019nCovID;
    this.Section5.ContactTracings[i] = new ContactTracing();
    this.Section5.ContactTracings[i].IsKnownCase = isKnown;
    this.Section5.ContactTracings[i].CDC2019nCovID = covId;


  }

  onAutocompleteSelected(result: PlaceResult, i: number) {
    console.log('onAddressSelected: ', result);
    if (result != undefined) {
      this.Section5.ContactTracings[i].Address.StreetAddress = undefined;
      this.Section5.ContactTracings[i].Address.FullAddress = result.formatted_address;
      let state: string = "";
      let county: string = "";
      let streetNumber: string = "";
      let streetName: string = "";
      for (let addressComponent of result.address_components) {
        for (let componentType of addressComponent.types) {
          if (componentType == "locality") {
            this.Section5.ContactTracings[i].Address.City  = addressComponent.long_name;
            break;
          } else if (componentType == "administrative_area_level_1") {
            state = addressComponent.long_name;
            break;
          } else if (componentType == "country") {
            this.Section5.ContactTracings[i].Address.Country = addressComponent.long_name;
            break;
          } else if (componentType == "postal_code") {
            this.Section5.ContactTracings[i].Address.Zipcode = addressComponent.long_name;
            break;
          } else if (componentType == "administrative_area_level_2") {
            county = addressComponent.long_name;
            break;
          }
          else if (componentType == "street_number") {
            streetNumber = addressComponent.long_name;
            break;
          }
          else if (componentType == "route") {
            streetName = addressComponent.long_name;
            break;
          }
        }
      }
      this.Section5.ContactTracings[i].Address.StreetAddress = streetNumber + " " + streetName;

      if (this.Section5.ContactTracings[i].Address.Country == "United States") {
        this.Section5.ContactTracings[i].Address.State = state;
        var lastIndex = county.lastIndexOf(" ");
        this.Section5.ContactTracings[i].Address.County = county.substring(0, lastIndex);
      } else {
        this.Section5.ContactTracings[i].Address.City = county;
        this.Section5.ContactTracings[i].Address.State = "Non US";
      }

      
    }
    this.UpdateData();
  }
  onLocationSelected(location: AddressLocation, i: number) {

    if (location != undefined) {
      this.Section5.ContactTracings[i].Address.Longitude = location.longitude;
      this.Section5.ContactTracings[i].Address.Latitude = location.latitude;
      console.log('onLocationSelected latitude: ', this.Section5.ContactTracings[i].Address.Latitude);
      console.log('onLocationSelected longitude: ', this.Section5.ContactTracings[i].Address.Longitude);
    }
  }

  UpdateAddressData(i: number) {

    this.Section5.ContactTracings[i].Address.Longitude = undefined;
    this.Section5.ContactTracings[i].Address.Latitude = undefined;
    this.Section5.ContactTracings[i].Address.City = undefined;
    this.Section5.ContactTracings[i].Address.State = undefined;
    this.Section5.ContactTracings[i].Address.Country = undefined;
    this.Section5.ContactTracings[i].Address.Zipcode = undefined;
    this.Section5.ContactTracings[i].Address.County = undefined;
    this.Section5.ContactTracings[i].Address.FullAddress = undefined;
    this.UpdateData();
  }
  onAutocompleteSelectedVenue(result: PlaceResult, i: number, j:number) {
    console.log('onAddressVenueSelected: ', result);
    if (result != undefined) {
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.StreetAddress = undefined;
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.FullAddress = result.formatted_address;
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.Name = result.name;
      let state: string = "";
      let county: string = "";
      let streetNumber: string = "";
      let streetName: string = "";
      let shrotStreet: string = "";
      for (let addressComponent of result.address_components) {
        for (let componentType of addressComponent.types) {
          if (componentType == "locality") {
            this.Section5.ContactTracings[i].ContactVenue[j].Venue.City = addressComponent.long_name;
            break;
          } else if (componentType == "administrative_area_level_1") {
            state = addressComponent.long_name;
            break;
          } else if (componentType == "country") {
            this.Section5.ContactTracings[i].ContactVenue[j].Venue.Country = addressComponent.long_name;
            break;
          } else if (componentType == "postal_code") {
            this.Section5.ContactTracings[i].ContactVenue[j].Venue.Zipcode = addressComponent.long_name;
            break;
          } else if (componentType == "administrative_area_level_2") {
            county = addressComponent.long_name;
            break;
          }
          else if (componentType == "street_number") {
            streetNumber = addressComponent.long_name;
            break;
          }
          else if (componentType == "route") {
            streetName = addressComponent.long_name;
            shrotStreet = addressComponent.short_name;
            break;
          }
        }
      }
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.StreetAddress = streetNumber + " " + streetName;

      if (this.Section5.ContactTracings[i].ContactVenue[j].Venue.Country == "United States") {
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.State = state;
        var lastIndex = county.lastIndexOf(" ");
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.County = county.substring(0, lastIndex);
      } else {
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.City = county;
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.State = "Non US";
      }

      if (streetNumber + " " + shrotStreet != result.name)
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.Name = result.name + ", " + result.formatted_address.substring(result.formatted_address.indexOf(" ") + 1);//", " + streetName + ", " + this.Section5.ContactTracings[i].ContactVenue[j].Venue.City + ", " + this.Section5.ContactTracings[i].ContactVenue[j].Venue.State + ", " + country;
      else
        this.Section5.ContactTracings[i].ContactVenue[j].Venue.Name = result.formatted_address;


    }
    this.UpdateData();
  }
  onLocationSelectedVenue(location: AddressLocation, i: number, j:number) {

    if (location != undefined) {
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.Longitude = location.longitude;
      this.Section5.ContactTracings[i].ContactVenue[j].Venue.Latitude = location.latitude;
    }
  }

  UpdateVenueData(i: number, j:number) {

    this.Section5.ContactTracings[i].ContactVenue[j].Venue.Longitude = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.Latitude = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.City = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.State = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.Country = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.Zipcode = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.County = undefined;
    this.Section5.ContactTracings[i].ContactVenue[j].Venue.FullAddress = undefined;
    this.UpdateData();
  }
}
