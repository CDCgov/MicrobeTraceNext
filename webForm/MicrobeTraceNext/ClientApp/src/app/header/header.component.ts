import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationDataService } from '../services/application-data.service';
import { Router } from '@angular/router';
import { UserProfile } from '../DTO/user-profile';
import { ClientsideStorageService } from '../services/clientside-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSetingsIcon = false;
  dataSubscription;
  constructor(private dataService: ApplicationDataService, private router: Router, private clientsideStorage: ClientsideStorageService) {
    if (dataService == undefined) {
      dataService = new ApplicationDataService();
    }
  }

  userInfo: UserProfile = this.dataService.MicrobeTraceData.UserProfile;

  ngOnInit(): void {
    this.dataSubscription = this.dataService.Change.subscribe(data => {
      this.userInfo = data.UserProfile;
    })
  }

  ngOnDestroy(): void {
    if (this.dataSubscription)
      this.dataSubscription.unsubscribe();
  }
  logout() {
    this.userInfo.IsLoggedIn = false;
    this.dataService.MicrobeTraceData.UserProfile = this.userInfo;
    this.dataService.update(this.dataService.MicrobeTraceData);
    this.clientsideStorage.RemoveData();
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
  openSlideNav() {
    this.isSetingsIcon = true;
  }
  closeSlideNav() {
    this.isSetingsIcon = false;
  }

}
