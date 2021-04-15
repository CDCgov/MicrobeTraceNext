import { Component, OnInit, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { ISectionComponent } from '../DTO/section-component';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Router, Data } from '@angular/router';
import { Section6, Section1} from '../DTO/section';
import { Bool } from '../DTO/enums';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { NgForm, FormControl, AbstractControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit, OnDestroy, ISectionComponent {

  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  MicrobeTraceDataSubscription;
  Section6: Section6;
  Bool: typeof Bool = Bool;
  today = new Date();
  isNew: boolean = true;
  currentCheckedValue;
  //Form Validation

  matcher = new CustomStateMatcher();

  //Date
  OnsetDate: Date;
  ResolveDate: Date;

  constructor(private dataService: ApplicationDataService, private clientsideStorage: ClientsideStorageService, private route: Router, private modal: MatDialog, private ren: Renderer2) {
    this.today.setDate(this.today.getDate());
}

  ngOnInit(): void {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });



    if (this.MicrobeTraceData.Section6 == undefined) {

      this.MicrobeTraceData.Section6 = new Section6();
      this.Section6 = this.MicrobeTraceData.Section6;

    } else {
      this.Section6 = this.MicrobeTraceData.Section6;

      if (this.MicrobeTraceData.BlockID) {
        this.isNew = false;
      }

      //Reinit Date

      if (this.Section6.ClinicalCourse.OnsetDate) {
        let date = this.Section6.ClinicalCourse.OnsetDate;
        this.OnsetDate = new Date(date);
      }

      if (this.Section6.ClinicalCourse.ResolveDate) {
        let date = this.Section6.ClinicalCourse.ResolveDate;
        this.ResolveDate = new Date(date);
      }
    }

    if (this.Section6.Saved != true) {
      this.Section6.Saved = false;
    }
  }
  ngOnDestroy(): void {
    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    //Save to local storage
    this.MicrobeTraceData.Section6 = this.Section6;
    this.dataService.update(this.MicrobeTraceData);

    this.clientsideStorage.SaveData(this.MicrobeTraceData);
  }
  @HostListener('window:beforeunload', ['$event'])
  BeforeUnloadHandler($event: any) {
    //Auto save on refresh Save to local storage
    if (this.Section6.Saved == false) {
      this.MicrobeTraceData.Section6 = this.Section6;
      this.dataService.update(this.MicrobeTraceData);
      this.clientsideStorage.SaveData(this.MicrobeTraceData);
    }

  }

  UpdateData() {
    this.Section6.Saved = false;
    console.log(this.Section6);
  }
  SaveData() {
    //Save to local storage
    this.Section6.Saved = true;
    this.MicrobeTraceData.Section6 = this.Section6;
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);

    this.route.navigate(['/form/section7']);
  }

  ClearData() {
    //Save to local storage
    this.MicrobeTraceData.Section6 = new Section6();
    this.dataService.update(this.MicrobeTraceData);
    this.clientsideStorage.SaveData(this.MicrobeTraceData);
    this.Section6 = this.dataService.MicrobeTraceData.Section6;
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
        this.Section6 = new Section6();
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
        this.Section6.ClinicalCourse.SymptomResolved = undefined;
      } else {
        this.currentCheckedValue = el.value
      }
    })
  }

  UpdateOnsetDate() {

    if (this.OnsetDate != undefined) {
      this.Section6.ClinicalCourse.OnsetDate = this.OnsetDate.toLocaleDateString('en-US');
    }
    else {
      this.Section6.ClinicalCourse.OnsetDate = undefined;
    }

    this.UpdateData();

  }
  UpdateResolveDate() {

    if (this.ResolveDate != undefined) {
      this.Section6.ClinicalCourse.ResolveDate = this.ResolveDate.toLocaleDateString('en-US');
    }
    else {
      this.Section6.ClinicalCourse.ResolveDate = undefined;
    }

    this.UpdateData();

  }

  ClearDate() {
    this.OnsetDate = undefined;
    this.ResolveDate = undefined;
  }


}
