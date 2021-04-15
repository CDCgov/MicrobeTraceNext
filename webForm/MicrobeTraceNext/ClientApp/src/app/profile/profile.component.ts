import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../services/application-data.service';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { UserProfile } from '../DTO/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  MicrobeTraceDataSubscription;
  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  User: UserProfile;
  constructor(private dataService: ApplicationDataService) { }

  ngOnInit() {

    this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
      this.MicrobeTraceData = data;
    });

    if (this.MicrobeTraceData != undefined) {
      this.User = this.MicrobeTraceData.UserProfile;
    }
  }

}
