import { Component, OnInit, ViewChild, OnDestroy, HostListener, Inject } from '@angular/core';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { SearchBy } from '../DTO/enums';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { CustomStateMatcher } from '../services/custom-error-state-matcher';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ApplicationDataService } from '../services/application-data.service';
import { Router } from '@angular/router';
import { DownloadFilterBlock, Filters } from '../DTO/API-DTO/DownloadFilterBlock';
import { DownloadFilterBlockResponse } from '../DTO/API-DTO/DownloadFilterBlockResponse';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
import { BPaaSInfo } from '../DTO/bpass-information';
import { UserProfile } from '../DTO/user-profile';
import { SearchResults } from '../DTO/search-result';
import { SearchValue } from '../DTO/search-value';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  //Form Validation
  matcher = new CustomStateMatcher();
  SearchValue: SearchValue = new SearchValue();
  Searched: SearchValue;
  isLoading: boolean = false;
  SeavedResult: SearchResults = this.dataService.SearchResult;
  SearchResult: MicrobeTraceData[];
  ResultTable: TableElement[] = new Array();
  displayedColumns: string[] = ['number', 'nCoVID', 'firstName', 'lastName', 'year', 'index'];
  dataSource;
  ShowResult: boolean = false;
  MicrobeTraceDataSubscription;
  MicrobeTraceData: MicrobeTraceData = this.dataService.MicrobeTraceData;
  SearchResultSubscription;
  httpClient: HttpClient;
  baseUrl: string;
  IsSameParam: boolean = false;
  constructor(public staticData: DropdownStaticDataService, public regex: RegexPatternsService, private dataService: ApplicationDataService, private route: Router, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private modal: MatDialog) {
    this.httpClient = http;
    this.baseUrl = _baseUrl;

}


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
  console.log(this.dataService);
  this.MicrobeTraceDataSubscription = this.dataService.Change.subscribe(data => {
    this.MicrobeTraceData = data;
  });
  this.SearchResultSubscription = this.dataService.SearchChange.subscribe(search => {
    this.SeavedResult = search;
  });

  console.log(this.SeavedResult);

  //Keep in memory
  //Seat search result to the data service

  if (this.SeavedResult != undefined && this.SeavedResult.SearchResult != undefined) {

    this.SearchResult = this.SeavedResult.SearchResult;
    this.SearchValue = this.SeavedResult.SeachValue;
    this.Searched = this.deepCopy(this.SeavedResult.SeachValue);
    this.IsSameParam = true;
    this.ResultTable = this.BuildTableDataList(this.SearchResult);
    this.dataSource = new MatTableDataSource<TableElement>(this.ResultTable);
    this.dataSource.paginator = this.paginator;
    this.ShowResult = true;
    }



}

  ngOnDestroy(): void {

    if (this.MicrobeTraceDataSubscription)
      this.MicrobeTraceDataSubscription.unsubscribe();

    if (this.SearchResultSubscription)
      this.SearchResultSubscription.unsubscribe();
  }

  UpdateData() { }

  Modify(index: number) {
    
    console.log("Modify: " + index);

    let selectedData: MicrobeTraceData =  this.deepCopy(this.SearchResult[index]);
    selectedData.UserProfile = this.MicrobeTraceData.UserProfile;
    this.MicrobeTraceData = selectedData;

    console.log(this.MicrobeTraceData);

    this.dataService.update(this.MicrobeTraceData);

    this.dataService.PromptLoginQuestion = false;
    this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);

    this.route.navigate(['/form/section1']);


  }

  BuildTableDataList(searchResult: MicrobeTraceData[]): TableElement[] {
    let elements: TableElement[] = new Array();

    let index: number = 0;

    for (let data of searchResult) {

      elements.push(this.BuildTableData(data, index));
      index++;

    }

    return elements;
  }

  BuildTableData(searchResult: MicrobeTraceData, index: number): TableElement {

    let element: TableElement = new TableElement();

    element.firstName = searchResult.Section1.PatientInformation.Firstname;
    element.lastName = searchResult.Section1.PatientInformation.Lastname;
    if (searchResult.Section1.PatientInformation.DateOfBirth) 
      element.year = new Date(searchResult.Section1.PatientInformation.DateOfBirth).getFullYear();
    element.nCoVID = searchResult.Section1.PatientInformation.CDCInformation.CDC2019nCovID;
    element.index = index;
    element.number = index + 1;


    return element;
  }

_Search(){
  //Make a service call
  //Loop through result and deserialized
    //this.SearchResult

  //Add create new TableElement
    //Add the Table element to Result ResultTable
  //this.ResultTable= BuildTableData()

  this.ResultTable = [
    { number: 1, index: 1, firstName: 'Hydrogen', year: 1979, lastName: 'H', nCoVID: 'TX-100000' },
    { number: 2, index: 2, firstName: 'Helium', year: 1996, lastName: 'He', nCoVID: 'TX-100000' },
    { number: 3, index: 3, firstName: 'Lithium', year: 1941, lastName: 'Li', nCoVID: 'TX-100000' },
    { number: 4, index: 4, firstName: 'Beryllium', year: 1922, lastName: 'Be', nCoVID: 'TX-100000' },
    { number: 5, index: 5, firstName: 'Boron', year: 1981, lastName: 'B', nCoVID: 'TX-100000' },
    { number: 6, index: 6, firstName: 'Carbon', year: 2010, lastName: 'C', nCoVID: 'TX-100000' },
    { number: 7, index: 7, firstName: 'Nitrogen', year: 1967, lastName: 'N', nCoVID: 'TX-100000' },
    { number: 8, index: 8, firstName: 'Oxygen', year: 1994, lastName: 'O', nCoVID: 'TX-100000' },
    { number: 9, index: 9, firstName: 'Fluorine', year: 1984, lastName: 'F', nCoVID: 'TX-100000' },
    { number: 10, index: 10, firstName: 'Neon', year: 2017, lastName: 'Ne', nCoVID: 'TX-100000' },
    { number: 11, index: 11, firstName: 'Sodium', year: 1997, lastName: 'Na', nCoVID: 'TX-100000' },
    { number: 12, index: 12, firstName: 'Magnesium', year: 2005, lastName: 'Mg', nCoVID: 'TX-100000' },
    { number: 13, index: 13, firstName: 'Aluminum', year: 2015, lastName: 'Al', nCoVID: 'TX-100000' },
    { number: 14, index: 14, firstName: 'Silicon', year: 2005, lastName: 'Si', nCoVID: 'TX-100000' },
    { number: 15, index: 15, firstName: 'Phosphorus', year: 2018, lastName: 'P', nCoVID: 'TX-100000' },
    { number: 16, index: 16, firstName: 'Sulfur', year: 2006, lastName: 'S', nCoVID: 'TX-100000' },
    { number: 17, index: 17, firstName: 'Chlorine', year: 2003, lastName: 'Cl', nCoVID: 'TX-100000' },
    { number: 18, index: 18, firstName: 'Argon', year: 1988, lastName: 'Ar', nCoVID: 'TX-100000' },
    { number: 19, index: 19, firstName: 'Potassium', year: 1983, lastName: 'K', nCoVID: 'TX-100000' },
    { number: 20, index: 20, firstName: 'Calcium', year: 1978, lastName: 'Ca', nCoVID: 'TX-100000' },
  ];

  this.dataSource = new MatTableDataSource<TableElement>(this.ResultTable);
  this.dataSource.paginator = this.paginator;

  this.ShowResult = true;
  this.Searched = this.SearchValue;

 // this.dataService.updateSearch(this.SearchResult);
}


  Search() {
    console.log("Inside Submit");

    this.isLoading = true;
    this.ShowResult = false;
    let resp: DownloadFilterBlockResponse;
    this.ResultTable = new Array();
    this.SearchResult = undefined;
    try {

      let request: DownloadFilterBlock = this.CreateBPaaSLedgerRequest();
      console.log(request);
      console.log(this.baseUrl);
      this.httpClient.post<DownloadFilterBlockResponse>(this.baseUrl + 'api/search', request).subscribe(result => {


        resp = result;

        console.log(resp);

        if (resp.success) {

          this.ResultTable = new Array();
          this.SearchResult = new Array();


          let index: number = 0;

          for (let body of resp.searchResult) {

            let data: MicrobeTraceData = JSON.parse(body.data);
            data.BlockID = body.blockID;
            data.BlockName = body.blockName;
            console.log(data);


            this.SearchResult.push(data);

            this.ResultTable.push(this.BuildTableData(data, index));

            index++;

          }


          this.Searched = this.deepCopy(this.SearchValue);
          this.IsSameParam = true;

          this.SeavedResult = new SearchResults(this.SearchResult, this.SearchValue);

          this.dataService.updateSearch(this.SeavedResult);

          this.isLoading = false;


          if (this.SearchResult.length > 1) {
            this.dataSource = new MatTableDataSource<TableElement>(this.ResultTable);
            this.dataSource.paginator = this.paginator;

            this.ShowResult = true;

          } else {
            this.Modify(0);
          }


        } else {

          let info: ModalData = new ModalData("Error occured!! " + resp.message, "Close", "Error");

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info
          });

          this.isLoading = false;

        }




      }, error => {

        console.error(error);

        let info: ModalData = new ModalData("Unexpected rror occured!!", "Close", "Error");

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


  CreateBPaaSLedgerRequest(): DownloadFilterBlock {

    let request: DownloadFilterBlock = new DownloadFilterBlock();
    let user: UserProfile = this.MicrobeTraceData.UserProfile;
    let BPaaSData: BPaaSInfo = this.MicrobeTraceData.UserProfile.BPaasInfo;

    request.tenantID = BPaaSData.TenantID;
    request.userID = BPaaSData.UserID;
    request.ledgerName = BPaaSData.LedgerName;
    request.blockProofHash = this.MicrobeTraceData.BlockID;
    request.blockchainProofHash = BPaaSData.BlockchainProofHash;
    request.blockFilter = this.BuildSearchFilter(user);
    return request;


  }

  BuildSearchFilter(userProfile: UserProfile): Filters[]{

    let filters: Filters[] = new Array();

    let tenant: Filters = new Filters("UserProfile.BPaasInfo.TenantID", userProfile.BPaasInfo.TenantID);
    filters.push(tenant);

    let jurisdiction = new Filters("UserProfile.Jurisdiction", userProfile.Jurisdiction)
    filters.push(jurisdiction);

    if (this.SearchValue.SearchCriteria == SearchBy.nCoVIDAndLastName) {
      let searchCriteria: Filters = new Filters("Section1.PatientInformation.CDCInformation.CDC2019nCovID", this.SearchValue.Value1);
      filters.push(searchCriteria);
      let searchCriteria2: Filters = new Filters("Section1.PatientInformation.Lastname", this.SearchValue.Value2);
      filters.push(searchCriteria2);

    }
    else if (this.SearchValue.SearchCriteria == SearchBy.nCoVID) {
      let searchCriteria: Filters = new Filters("Section1.PatientInformation.CDCInformation.CDC2019nCovID", this.SearchValue.Value1);
      filters.push(searchCriteria);
    }


    

    return filters;
  }

  deepCopy(obj): any {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  Clear() {

    this.Searched = undefined;
    this.IsSameParam = false;
    this.SearchValue = new SearchValue();
    this.SearchResult = undefined;
    this.ResultTable = new Array();
    this.ShowResult = false;

    this.SeavedResult = new SearchResults(undefined, undefined);

    this.dataService.updateSearch(this.SeavedResult);
  }

  Reload() {

    this.Searched = undefined;
    this.IsSameParam = false;
    this.SearchResult = undefined;
    this.ResultTable = new Array();
    this.ShowResult = false;

    this.Search();
  }

  ToUpper() {
    if (this.SearchValue.Value1 != undefined) {
      this.SearchValue.Value1 = this.SearchValue.Value1.toUpperCase();
    }
    if (this.SearchValue.Value2 != undefined) {
      this.SearchValue.Value2 = this.SearchValue.Value2.toUpperCase();
    }
  }

  Update() {
    if (this.Searched != undefined) {

      if (this.SearchValue.SearchCriteria == this.Searched.SearchCriteria &&
        this.SearchValue.Value1 == this.Searched.Value1 && this.SearchValue.Value2 == this.Searched.Value2) {
        this.IsSameParam = true;
      } else {
        this.IsSameParam = false;
      }


    } else {
      this.IsSameParam = false;
    }
  }



}



export class TableElement {
  nCoVID: string;
  index: number;
  number: number;
  year: number;
  firstName: string;
  lastName: string;
}


