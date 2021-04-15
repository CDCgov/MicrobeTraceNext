import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../services/application-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-section-select',
  templateUrl: './section-select.component.html',
  styleUrls: ['./section-select.component.css']
})
export class SectionSelectComponent implements OnInit {

  DataServiceSubscription;
  constructor(public dataService: ApplicationDataService, private router: Router) { }

  ngOnInit(): void {

  }

 

}
