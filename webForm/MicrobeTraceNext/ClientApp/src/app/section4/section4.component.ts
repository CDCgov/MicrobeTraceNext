import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Section4, Section1} from '../DTO/section';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { Bool } from '../DTO/enums';
import { Data, Router } from '@angular/router';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import PlaceResult = google.maps.places.PlaceResult;
import { AddressLocation } from '../DTO/AddressLocation';
import { Location } from '../DTO/location';
@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section4: Section4;
  Bool: typeof Bool = Bool
  isNew: boolean = true;
  DefaultCountry: string = "US";

  //Date Handling
  InternationalTraveledDate: Date;
  DomesticTraveledDate: Date;
  CruiseShipTraveldDate: Date;
  WorkPlaceExposedDate: Date;
  AirportExposureDate: Date;
  AdultLivingFacilityExposureDate: Date;
  SchoolExposureDate: Date;
  CorrectionalFacilityExposureDate: Date;
  CommunityEventExposureDate: Date;
  CovidAnimalExposureDate: Date;
  UnknownExposureDate: Date;
  OtherExposureDate: Date;
  today = new Date();


  //Form Validation

  matcher = new CustomStateMatcher();
  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, public staticData: DropdownStaticDataService, private route: Router, public regex: RegexPatternsService, private modal: MatDialog) {
}

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section4 == undefined) {

      this.MicrobeTraceData.Section4 = new Section4();
      this.Section4 = this.MicrobeTraceData.Section4;

    } else {
      this.Section4 = this.MicrobeTraceData.Section4;

      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }
    }
    //Reinit Date Proerties

    this.ReinitDate();

    if (this.Section4.Saved != true) {
      this.Section4.Saved = false;
    }
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section4 = this.Section4;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section4.Saved == false) {
      this.MicrobeTraceData.Section4 = this.Section4;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }
  }

  UpdateData() {
    this.Section4.Saved = false;
  }
  SaveData() {
    //Save to local storage
    this.Section4.Saved = true;
    this.MicrobeTraceData.Section4 = this.Section4;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section5']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section4 = new Section4()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section4 = this.dataService.MicrobeTraceData.Section4;
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
        this.Section4 = new Section4();
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



  onAutocompleteSelected(result: PlaceResult, location: Location) {
    console.log('onAddressSelected: ', result);
    if (result != undefined) {
      location.StreetAddress = undefined;
      location.FullAddress = result.formatted_address;
      let state: string = "";
      let county: string = "";
      let streetNumber: string = "";
      let streetName: string = "";
      let shrotStreet: string = "";
      for (let addressComponent of result.address_components) {
        for (let componentType of addressComponent.types) {
          if (componentType == "locality") {
            location.City = addressComponent.long_name;
            break;
          } else if (componentType == "administrative_area_level_1") {
            state = addressComponent.long_name;
            break;
          } else if (componentType == "country") {
            location.Country = addressComponent.long_name;
            break;
          } else if (componentType == "postal_code") {
            location.Zipcode = addressComponent.long_name;
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
      location.StreetAddress = streetNumber + " " + streetName;

      if (this.Section4.ExposureInformation.OtherSpecify.Country == "United States") {
        location.State = state;
        var lastIndex = county.lastIndexOf(" ");
        location.County = county.substring(0, lastIndex);
      } else {
        location.City = county;
        location.State = "Non US";
      }

      if (streetNumber + " " + shrotStreet != result.name)
        location.Name = result.name + ", " + result.formatted_address.substring(result.formatted_address.indexOf(" ") + 1);
      else
        location.Name = result.formatted_address;
    }
    this.UpdateData();
  }
  onLocationSelectedAddress(address: AddressLocation, location: Location) {

    if (address != undefined) {
      location.Longitude = address.longitude;
      location.Latitude = address.latitude;
    }
  }

  UpdateAddressData(location: Location) {

    location.Longitude = undefined;
    location.Latitude = undefined;
    location.City = undefined;
    location.State = undefined;
    location.Country = undefined;
    location.Zipcode = undefined;
    location.County = undefined;
    location.FullAddress = undefined;
    this.UpdateData();
  }

  //Date Handling

  ReinitDate() {
    if (this.Section4.ExposureInformation.InternationalTraveledDate) {
      let date = this.Section4.ExposureInformation.InternationalTraveledDate;
      this.InternationalTraveledDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.DomesticTraveledDate) {
      let date = this.Section4.ExposureInformation.DomesticTraveledDate;
      this.DomesticTraveledDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.CruiseShipTraveldDate) {
      let date = this.Section4.ExposureInformation.CruiseShipTraveldDate;
      this.CruiseShipTraveldDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.WorkPlaceExposedDate) {
      let date = this.Section4.ExposureInformation.WorkPlaceExposedDate;
      this.WorkPlaceExposedDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.AirportExposureDate) {
      let date = this.Section4.ExposureInformation.AirportExposureDate;
      this.AirportExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.AdultLivingFacilityExposureDate) {
      let date = this.Section4.ExposureInformation.AdultLivingFacilityExposureDate;
      this.AdultLivingFacilityExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.SchoolExposureDate) {
      let date = this.Section4.ExposureInformation.SchoolExposureDate;
      this.SchoolExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.CorrectionalFacilityExposureDate) {
      let date = this.Section4.ExposureInformation.CorrectionalFacilityExposureDate;
      this.CorrectionalFacilityExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.CommunityEventExposureDate) {
      let date = this.Section4.ExposureInformation.CommunityEventExposureDate;
      this.CommunityEventExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.CovidAnimalExposureDate) {
      let date = this.Section4.ExposureInformation.CovidAnimalExposureDate;
      this.CovidAnimalExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.UnknownExposureDate) {
      let date = this.Section4.ExposureInformation.UnknownExposureDate;
      this.UnknownExposureDate = new Date(date);
    }
    if (this.Section4.ExposureInformation.OtherExposureDate) {
      let date = this.Section4.ExposureInformation.OtherExposureDate;
      this.OtherExposureDate = new Date(date);
    }
  }

  ClearDate() {
    this.DomesticTraveledDate = undefined;
    this.InternationalTraveledDate = undefined;
    this.CruiseShipTraveldDate = undefined;
    this.AirportExposureDate = undefined;
    this.WorkPlaceExposedDate = undefined;
    this.AdultLivingFacilityExposureDate = undefined;
    this.SchoolExposureDate = undefined;
    this.CommunityEventExposureDate = undefined;
    this.CorrectionalFacilityExposureDate = undefined;
    this.CovidAnimalExposureDate = undefined;
    this.OtherExposureDate = undefined;
    this.UnknownExposureDate = undefined;

  }
  UpdateDomesticTraveledDate() {
    if (this.DomesticTraveledDate != undefined) {
      this.Section4.ExposureInformation.DomesticTraveledDate = this.DomesticTraveledDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.DomesticTraveledDate = undefined;
    }

    this.UpdateData();
  }
  UpdateInternationalTraveledDate() {
    if (this.InternationalTraveledDate != undefined) {
      this.Section4.ExposureInformation.InternationalTraveledDate = this.InternationalTraveledDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.InternationalTraveledDate = undefined;
    }

    this.UpdateData();
  }
  UpdateCruiseShipTraveldDate() {
    if (this.CruiseShipTraveldDate != undefined) {
      this.Section4.ExposureInformation.CruiseShipTraveldDate = this.CruiseShipTraveldDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.CruiseShipTraveldDate = undefined;
    }

    this.UpdateData();
  }
  UpdateAirportExposureDate() {
    if (this.AirportExposureDate != undefined) {
      this.Section4.ExposureInformation.AirportExposureDate = this.AirportExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.AirportExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateWorkPlaceExposedDate() {
    if (this.WorkPlaceExposedDate != undefined) {
      this.Section4.ExposureInformation.WorkPlaceExposedDate = this.WorkPlaceExposedDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.WorkPlaceExposedDate = undefined;
    }

    this.UpdateData();
  }
  UpdateAdultLivingFacilityExposureDate() {
    if (this.AdultLivingFacilityExposureDate != undefined) {
      this.Section4.ExposureInformation.AdultLivingFacilityExposureDate = this.AdultLivingFacilityExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.AdultLivingFacilityExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateSchoolExposureDate() {
    if (this.SchoolExposureDate != undefined) {
      this.Section4.ExposureInformation.SchoolExposureDate = this.SchoolExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.SchoolExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateCommunityEventExposureDate() {
    if (this.CommunityEventExposureDate != undefined) {
      this.Section4.ExposureInformation.CommunityEventExposureDate = this.CommunityEventExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.CommunityEventExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateCorrectionalFacilityExposureDate() {
    if (this.CorrectionalFacilityExposureDate != undefined) {
      this.Section4.ExposureInformation.CorrectionalFacilityExposureDate = this.CorrectionalFacilityExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.CorrectionalFacilityExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateCovidAnimalExposureDate() {
    if (this.CovidAnimalExposureDate != undefined) {
      this.Section4.ExposureInformation.CovidAnimalExposureDate = this.CovidAnimalExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.CovidAnimalExposureDate = undefined;
    }

    this.UpdateData();
  }

  UpdateOtherExposureDate() {
    if (this.OtherExposureDate != undefined) {
      this.Section4.ExposureInformation.OtherExposureDate = this.OtherExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.OtherExposureDate = undefined;
    }

    this.UpdateData();
  }
  UpdateUnknownExposureDate() {
    if (this.UnknownExposureDate != undefined) {
      this.Section4.ExposureInformation.UnknownExposureDate = this.UnknownExposureDate.toLocaleDateString('en-US');
    }
    else {
      this.Section4.ExposureInformation.UnknownExposureDate = undefined;
    }

    this.UpdateData();
  }



}
