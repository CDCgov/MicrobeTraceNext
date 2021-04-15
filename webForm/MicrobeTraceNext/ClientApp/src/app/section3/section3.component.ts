import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ApplicationDataService } from '../services/application-data.service';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Section3, Section1 } from '../DTO/section';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { Bool } from '../DTO/enums';
import { County } from '../DTO/county-state';
import { Router, Data } from '@angular/router';
import * as moment from 'moment';
import { NgForm, NgModel } from '@angular/forms';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { AddressLocation } from '../DTO/AddressLocation';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit, OnDestroy, ISectionComponent {


  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section3: Section3;
  ApplicableCounties: County[];
  Bool: typeof Bool = Bool
  today = new Date();
  isNew: boolean = true;
  //Form Validation
  DateOfBirth: Date;
  matcher = new CustomStateMatcher();
  DefaultCountry: string = "US";
  AddressVal: string;

  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, public staticData: DropdownStaticDataService, private route: Router, public regex: RegexPatternsService, private modal: MatDialog) {
    this.today.setDate(this.today.getDate());
}

  ngOnInit(): void {



    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section3 == undefined) {

      this.MicrobeTraceData.Section3 = new Section3();
      this.Section3 = this.MicrobeTraceData.Section3;

    } else {
      this.Section3 = this.MicrobeTraceData.Section3;

      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }

    }


    if (this.MicrobeTraceData.Section1 != undefined && this.MicrobeTraceData.Section1.PatientInformation.DateOfBirth) {

      this.Section3.CaseDemographics.DateOfBirth = this.MicrobeTraceData.Section1.PatientInformation.DateOfBirth;
    

    }

    if (this.Section3.CaseDemographics.DateOfBirth) {
      let date = this.Section3.CaseDemographics.DateOfBirth;
      this.DateOfBirth = new Date(date);

      this.UpdateDateOfBirth(this.DateOfBirth);

    }

    if (this.Section3.CaseDemographics.Address.State != undefined && this.Section3.CaseDemographics.Address.State != "Non US") {
      this.ApplicableCounties = this.ApplicableCounties = this.staticData.Counties.filter(x => x.State.replace(" ", "").toUpperCase() == this.Section3.CaseDemographics.Address.State.replace(" ", "").toUpperCase());

      //if (this.ApplicableCounties == undefined || this.ApplicableCounties.length == 0) {
      //  this.ApplicableCounties = new Array();
      //  let NACountie: County = new County();
      //  NACountie.County = this.Section3.CaseDemographics.State;
      //  NACountie.State = this.Section3.CaseDemographics.State;
      //  this.ApplicableCounties.push(NACountie);
      //}

    }
    if (this.Section3.Saved != true) {
      this.Section3.Saved = false;
    }
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    //this.MicrobeTraceData.Section2 = this.Section2;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section3.Saved == false) {
      this.MicrobeTraceData.Section3 = this.Section3;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }
  }
  UpdateStateData() {
    if (this.Section3.CaseDemographics.Address.State != undefined) {
      this.ApplicableCounties = this.staticData.Counties.filter(x => x.State.replace(" ", "").toUpperCase() == this.Section3.CaseDemographics.Address.State.replace(" ", "").toUpperCase());


    } else {
      this.ApplicableCounties = new Array();
    }
    this.Section3.CaseDemographics.Address.County = undefined;
    this.UpdateData();
  }

  UpdateDateOfBirth(event: any) {

    let years: number = this.CalcAgeFromDateOfBirthday(this.Section3.CaseDemographics.DateOfBirth);

    if (years > 0) {
      this.Section3.CaseDemographics.Age = years;
      this.Section3.CaseDemographics.AgeUnits = "Years";
    } else {
      let months: number = this.CalcAgeMonthFromDateOfBirthday(this.Section3.CaseDemographics.DateOfBirth);
      this.Section3.CaseDemographics.Age = months;
      this.Section3.CaseDemographics.AgeUnits = "Months";
    }

   // this.UpdateData();

  }



  CalcAgeFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
  }
  CalcAgeMonthFromDateOfBirthday(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'months');
  }

  UpdateData() {
    this.Section3.Saved = false;
  }
  SaveData() {
    //Save to local storage
    this.Section3.Saved = true;
    this.MicrobeTraceData.Section3 = this.Section3;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section4']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section3 = new Section3()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section3 = this.dataService.MicrobeTraceData.Section3;

    if (this.MicrobeTraceData.Section1 != undefined && this.MicrobeTraceData.Section1.PatientInformation.DateOfBirth != undefined) {

      this.Section3.CaseDemographics.DateOfBirth = this.MicrobeTraceData.Section1.PatientInformation.DateOfBirth;


    }

    if (this.Section3.CaseDemographics.DateOfBirth != undefined) {
      let date = this.Section3.CaseDemographics.DateOfBirth;
      this.DateOfBirth = new Date(date);

      this.UpdateDateOfBirth(this.DateOfBirth);

    }
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
        this.Section3 = new Section3();
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

  onAutocompleteSelected(result: PlaceResult, address: NgModel) {
    console.log('onAddressSelected: ', result);
    console.log('adress model: ', address);

    this.Section3.CaseDemographics.Address.FullAddress = undefined;
    this.Section3.CaseDemographics.Address.StreetAddress = undefined;
    //address.value = undefined;
    if (result != undefined) {
      this.Section3.CaseDemographics.Address.FullAddress = result.formatted_address;
      let state: string = "";
      let county: string = "";
      let streetNumber: string = "";
      let streetName: string = "";
      for (let addressComponent of result.address_components) {
        for (let componentType of addressComponent.types) {
           if (componentType == "locality") {
             this.Section3.CaseDemographics.Address.City = addressComponent.long_name;
              break;
           } else if (componentType == "administrative_area_level_1") {
              state = addressComponent.long_name;
              break;
           } else if (componentType == "country") {
             this.Section3.CaseDemographics.Address.Country = addressComponent.long_name;
              break;
           } else if (componentType == "postal_code") {
             this.Section3.CaseDemographics.Address.Zipcode = addressComponent.long_name;
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

      this.Section3.CaseDemographics.Address.StreetAddress = streetNumber + " " + streetName;

      if (this.Section3.CaseDemographics.Address.Country == "United States") {
        this.Section3.CaseDemographics.Address.State = state;
        this.UpdateStateData()
        var lastIndex = county.lastIndexOf(" ");
        this.Section3.CaseDemographics.Address.County = county.substring(0, lastIndex);
      } else {
        this.Section3.CaseDemographics.Address.City = county;
        this.Section3.CaseDemographics.Address.State = "Non US";
      }
    }
    this.UpdateData();
  }
  onLocationSelected(location: AddressLocation) {

    if (location != undefined) {
      this.Section3.CaseDemographics.Address.Longitude = location.longitude;
      this.Section3.CaseDemographics.Address.Latitude = location.latitude;
      this.UpdateData();

    }
  }

  UpdateAddressData() {
    this.Section3.CaseDemographics.Address.FullAddress = undefined;
    this.Section3.CaseDemographics.Address.Longitude = undefined;
    this.Section3.CaseDemographics.Address.Latitude = undefined;
    this.Section3.CaseDemographics.Address.City = undefined;
    this.Section3.CaseDemographics.Address.State = undefined;
    this.Section3.CaseDemographics.Address.Country = undefined;
    this.Section3.CaseDemographics.Address.Zipcode = undefined;
    this.Section3.CaseDemographics.Address.County = undefined;
    console.log('onLocationSelected latitude: ', this.Section3.CaseDemographics.Address.Latitude);
    console.log('onLocationSelected longitude: ', this.Section3.CaseDemographics.Address.Longitude);
    this.UpdateData();
  }

  CheckStreetAddress(address: NgModel) {
    console.log(address);
    //this.AddressVal = this.Section3.CaseDemographics.Address.StreetAddress;
    //this.Section3.CaseDemographics.Address.StreetAddress = undefined;

  }

}
