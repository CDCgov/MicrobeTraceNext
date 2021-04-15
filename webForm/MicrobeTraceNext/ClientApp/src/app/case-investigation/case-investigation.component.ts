import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { PreviousRouteService } from '../services/previous-route.service';
import { ApplicationDataService } from '../services/application-data.service';
import { UserProfile } from '../DTO/user-profile';

@Component({
  selector: 'app-case-investigation',
  templateUrl: './case-investigation.component.html',
  styleUrls: ['./case-investigation.component.css']
})
export class CaseInvestigationComponent implements OnInit, OnDestroy {

  ShowWelcome: boolean = false;
  private previousUrl: string;
  MicrobeTraceDataSubscription;
  User: UserProfile = this.dataService.MicrobeTraceData.UserProfile;
  constructor(private route: Router, private previousRoute: PreviousRouteService, private dataService: ApplicationDataService) {
 
  }

  ngOnInit() {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.User = data.UserProfile;
    });

    

    this.previousUrl = this.previousRoute.getPreviousUrl();
    console.log(this.previousUrl);

    if (this.previousUrl == undefined || this.previousUrl.includes('login')) {
      this.ShowWelcome = true;
    }

  }

  ngOnDestroy(): void {

    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();
  }


  GoForm() {
    this.route.navigate(['/form/section1']);
  }

  GoSearch() {
    this.route.navigate(['/search']);

  }


}
