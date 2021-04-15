import { Component, OnInit, OnDestroy, TemplateRef, ViewChild  } from '@angular/core';
import { ApplicationDataService } from './services/application-data.service';
import { LoginService } from './services/login.service';
import { Router, NavigationEnd, UrlTree } from '@angular/router';
import { MicrobeTraceData } from './DTO/microbetrce-data';
import { MatDialog } from '@angular/material/dialog';
import { ClientsideStorageService } from './services/clientside-storage.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ModalData } from './DTO/modal-data';
import { BooleanModalComponent } from './boolean-modal/boolean-modal.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  @ViewChild('countDownModal', { static: true }) countDownModal: TemplateRef<any>;


  title = 'MicrobeTraceNext';
  isUserLoggedIn = false;
  isLoading = false;

  navigationSubscription;

  idleWarningSubscription;
  idleTimeoutSubscription;
  idleStartSubscription;
  idleEndSubscription;
  idleState = 'Not started.';
  timedOut = false;
  counter = 0;
  intervalId; 
  constructor(private dataService: ApplicationDataService, private route: Router, private loginService: LoginService, private clientsideStorage: ClientsideStorageService, private modal: MatDialog, private idle: Idle, private keepalive: Keepalive) {
    if (this.dataService == undefined) {
      this.dataService = new ApplicationDataService();

    }

    this.navigationSubscription = this.route.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component

      if (e instanceof NavigationEnd) {

        this.autoLogin();
      }
    });

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(environment.IdleTime);


    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(environment.Timeout);

    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    //this.idleEndSubscription = idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    this.idleTimeoutSubscription = idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
      this.modal.closeAll();
      this.logout();
      this.reset();
    });
    this.idleStartSubscription = idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    this.idleWarningSubscription = idle.onTimeoutWarning.subscribe((countdown) => {


      if (this.dataService.MicrobeTraceData.UserProfile.IsLoggedIn) {
        this.idleState = `Due to inactivity, you will be logged out in ${countdown} seconds!`;

        if (this.modal.openDialogs == undefined || this.modal.openDialogs != undefined && this.modal.openDialogs.length == 0) {

          this.counter = environment.Timeout;
          this.idle.stop();
          this.modal.open(this.countDownModal, {
            width: '500px',
            disableClose: true
          });
          this.intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            if (this.counter === 0) {
              clearInterval(this.intervalId);
              this.idleState = 'Timed out!';
              this.timedOut = true;
              // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
              this.modal.closeAll();
              this.logout();
              this.reset();
            }
          }, 1000);
        }
        

     
      } else {
        this.interrupt();
      }

    });
    this.idleEndSubscription = idle.onIdleEnd.subscribe(() => {
      this.modal.closeAll();
      this.idleState = 'No longer idle.';
    
    })

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    this.reset();
  }
  interrupt() {
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.interrupt();

  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
    clearInterval(this.intervalId);
  }
  ngOnInit(): void {
    this.dataService.Change.subscribe(data => {
      this.isUserLoggedIn = data.UserProfile.IsLoggedIn;
    });
  }

  ngOnDestry(): void {
    if (this.navigationSubscription) 
      this.navigationSubscription.unsubscribe();

    if (this.idleStartSubscription)
      this.idleStartSubscription.unsubscribe();
    if (this.idleEndSubscription)
      this.idleEndSubscription.unsubscribe();
    if (this.idleWarningSubscription)
      this.idleWarningSubscription.unsubscribe();
    if (this.idleTimeoutSubscription)
      this.idleTimeoutSubscription.unsubscribe();
  }

  autoLogin(): void {
    this.isLoading = true;
    ////console.log.log("inside auto login");

    ////console.log.log(this.dataService.webEMDData.User);

    let newdata: MicrobeTraceData;
    if (this.dataService.MicrobeTraceData.UserProfile == undefined || this.dataService.MicrobeTraceData.UserProfile.Firstname == undefined) {
      newdata = this.loginService.authenticateUser();
    } else {
      newdata = this.dataService.MicrobeTraceData;
    }


    if (newdata != undefined && newdata != null && newdata.UserProfile.IsLoggedIn) {
      this.routeFromClientStorage(newdata);
    } else {
      this.isUserLoggedIn = false;
      this.dataService.MicrobeTraceData.UserProfile.IsLoggedIn = false;
      this.dataService.update(this.dataService.MicrobeTraceData);
    }
    this.isLoading = false;

  }

  routeFromClientStorage(newdata: MicrobeTraceData) {

    this.dataService.MicrobeTraceData = newdata;
    this.dataService.MicrobeTraceData.UserProfile.IsLoggedIn = true;
    this.dataService.update(this.dataService.MicrobeTraceData);
    this.isUserLoggedIn = true;

    if (this.route.url.includes('login')) {
      this.dataService.PromptLoginQuestion = true;
      this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);
      this.route.navigate(['/investigate']);
    }


  }
  logout() {
    this.isUserLoggedIn = false;
    this.dataService.MicrobeTraceData.UserProfile.IsLoggedIn = false;
    this.dataService.update(this.dataService.MicrobeTraceData);
    this.clientsideStorage.RemoveData();
    this.dataService.logout();
    this.route.navigate(['/login']);
  }
}
