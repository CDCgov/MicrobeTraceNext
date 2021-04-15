import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Router } from '@angular/router';
import { Section7, Section1 } from '../DTO/section';
import { Bool } from '../DTO/enums';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section7: Section7;
  Bool: typeof Bool = Bool;
  ShowTesting: boolean = false;
  isNew: boolean = true;

  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, private route: Router, public staticData: DropdownStaticDataService, private modal: MatDialog) { }

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section7 == undefined) {

      this.MicrobeTraceData.Section7 = new Section7();
      this.Section7 = this.MicrobeTraceData.Section7;

    } else {
      this.Section7 = this.MicrobeTraceData.Section7;

      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }
    }
    if (this.Section7.Saved != true) {
      this.Section7.Saved = false;
    }
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section7 = this.Section7;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section7.Saved == false) {
      this.MicrobeTraceData.Section7 = this.Section7;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }

  }

  UpdateData() {
    this.Section7.Saved = false;
    console.log(this.Section7);
  }
  SaveData() {
    //Save to local storage

    this.Section7.Saved = true;
    this.MicrobeTraceData.Section7 = this.Section7;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section8']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section7 = new Section7()
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section7 = this.dataService.MicrobeTraceData.Section7;
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
        this.Section7 = new Section7();
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
}
