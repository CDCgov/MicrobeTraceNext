import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplicationDataService } from '../services/application-data.service';
import { LoginService } from '../services/login.service';
import { ClientsideStorageService } from '../services/clientside-storage.service';
import { Router } from '@angular/router';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { UserProfile } from '../DTO/user-profile';
import { RegistrationRequest } from '../DTO//API-DTO/RegistrationRequest';
import { RegistrationRespone } from '../DTO//API-DTO/RegistrationRespone';
import { DropdownStaticDataService } from '../services/dropdown-static-data.service';
import { RegexPatternsService } from '../services/regex-patterns.service';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../DTO/API-DTO/LoginRequest';
import { LoginResponse } from '../DTO/API-DTO/LoginResponse';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../DTO/modal-data';
import { BooleanModalComponent } from '../boolean-modal/boolean-modal.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: string;
  Password: string;
  Organization: string;

  form: FormGroup;
  currInputValues: string;
  private emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
  private alphaNumeric = /^[A-Za-z0-9]{5,100}$/;
  private passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
  isPasswordError = false
  showPasswordErr = false;
  isEmailError = false;
  showEmailErr = false;
  isOrgError = true;
  showOrgErr = false;
  isLoading = false;
  isUserLoggedIn = false;
  dataSubscription;
  ShowLogin: boolean = true;
  newUserProfile: UserProfile;
  resgistrationErrorMessage: string;
  ShowNewAcctMsg = false;
  ConfirmPassword: string;
  isPasswordMatched: boolean = true;

  httpClient: HttpClient;
  baseUrl: string;

  constructor(private fb: FormBuilder, private dataService: ApplicationDataService, private loginService: LoginService, private clientsideStrorage: ClientsideStorageService,
    private router: Router, public staticData: DropdownStaticDataService, public regex: RegexPatternsService, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private modal: MatDialog) {

    this.httpClient = http;
    this.baseUrl = _baseUrl;


    this.form = fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex),
        Validators.minLength(5)]
      )],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.passwordRegex),
        Validators.minLength(5)]
      )],
        org: ['', Validators.compose([
          Validators.required]
        )]
    });
  }
  private FormSubscriber() {
    this.form.get('password').valueChanges.subscribe(_ => {
      if (this.form.get('password').status == "VALID" && this.form.get('password').errors == null && this.form.get('password').value.length >= 5) {
        this.isPasswordError = true;
        this.showPasswordErr = false;
      }
      else if ((this.form.get('password').status == "INVALID" || this.form.get('password').errors != null || this.form.get('password').value.length < 5)
        && (this.form.get('password').value != undefined && this.form.get('password').value != "")) {

        this.isPasswordError = false;
        this.showPasswordErr = true;

        
      }
    });
    this.form.get('email').valueChanges.subscribe(_ => {

      if (this.form.get('email').status == "VALID" && this.form.get('email').errors == null && this.form.get('email').value.length >= 5) {
        this.isEmailError = true;
        this.showEmailErr = false;


      }
      else if ((this.form.get('email').status == "INVALID" || this.form.get('email').errors != null || this.form.get('email').value.length < 5)
        && (this.form.get('email').value != undefined && this.form.get('email').value != "")) {
        this.isEmailError = false;
        this.showEmailErr = true;

      }
    });
    this.form.get('org').valueChanges.subscribe(_ => {

      if (this.form.get('org').status == "VALID" && this.form.get('org').errors == null && this.form.get('org').value.length > 1) {
        this.isOrgError = true;
        this.showOrgErr = false;


      }
      //else if (this.form.get('org').status == "INVALID" && (this.form.get('org').value != undefined || this.form.get('org').value != "")) {
      //  this.isOrgError = false;
      //  this.showOrgErr = true;


    //}
      else if (this.form.get('org').status == "INVALID" && (this.form.get('org').value == undefined || this.form.get('org').value == ""))
        this.isOrgError = false;

      });
  }



  ngOnInit(): void {
    let newdata: MicrobeTraceData;
    this.dataSubscription = this.dataService.Change.subscribe(data => {
      this.dataService.MicrobeTraceData = data;
      this.isUserLoggedIn = data.UserProfile.IsLoggedIn;
    });


    this.FormSubscriber();

  }
  public get hideDiv(): boolean {
    //return this.visibilityService.hideDiv;
    return true;
  }



  focusFields(event) {
    event.target.parentNode.classList.add('focused');
  }
  blurFields(event) {
    if (event.target.value == "") {
      event.target.classList.remove('filled');
      event.target.parentNode.classList.remove('focused');
    }
    else {
      event.target.classList.add('filled');
    }

  }

  _login() {
    this.isLoading = true;
    let loginResponse: UserProfile = this.loginService.submitLogin(this.Email, this.Password);

    //this.loginService.submitLogin.subscribe((loginResponse: UserProfile) => {

    if (loginResponse != undefined && loginResponse != null && loginResponse) {
      this.dataService.MicrobeTraceData.UserProfile = loginResponse;
      this.dataService.update(this.dataService.MicrobeTraceData);
      this.dataService.PromptLoginQuestion = true;
      this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);
      this.dataService.MicrobeTraceData = this.clientsideStrorage.FindUserData(this.dataService.MicrobeTraceData.UserProfile);
      this.clientsideStrorage.SaveData(this.dataService.MicrobeTraceData);
      this.isLoading = false;
      this.router.navigate(['/investigate']);
    } else {

      // this.dataService.MicrobeTraceData.popupInfo = new PopupInfo();
      // this.dataService.MicrobeTraceData.popupInfo.showPopup(MessageHelper.Popup_Header_Error, MessageHelper.Login_Validation_Error_Message, MessageHelper.Popup_TryAgain_Button);
      // this.isLoading = false;
    }



    //}


  }

  login() {

    this.isLoading = true;
    let resp: LoginResponse;
    try {

      let request: LoginRequest = this.CreateBPaaSLedgerRequest();

      this.httpClient.post<LoginResponse>(this.baseUrl + 'api/login', request).subscribe(result => {


        resp = result;

        console.log(resp);

        if (resp.success) {

          this.dataService.MicrobeTraceData.UserProfile = this.CreateUserProfile(resp);
          this.dataService.update(this.dataService.MicrobeTraceData);
          this.dataService.PromptLoginQuestion = true;
          this.dataService.updatePromptQuestion(this.dataService.PromptLoginQuestion);
          this.dataService.MicrobeTraceData = this.clientsideStrorage.FindUserData(this.dataService.MicrobeTraceData.UserProfile);
          this.clientsideStrorage.SaveData(this.dataService.MicrobeTraceData);
          this.isLoading = false;

          this.router.navigate(['/investigate']);


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

        let info: ModalData = new ModalData("Unexpected error occured!!", "Close", "Error");

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

  CreateBPaaSLedgerRequest(): LoginRequest {

    let req: LoginRequest = new LoginRequest();
    req.Email = this.Email;
    req.Password = this.Password;
    req.LedgerName = "ContactTrace";
    req.TenantName = this.Organization;

    return req;


  }

  CreateUserProfile(resp: LoginResponse): UserProfile {

    let profile: UserProfile = new UserProfile();

    profile.Email = resp.email;
    profile.Firstname = resp.firstName;
    profile.Lastname = resp.lastName;
    profile.Jurisdiction = resp.jurisdiction;
    profile.Organization = resp.organization;
    profile.Phone = resp.phone;
    profile.ReportingHealthDepartment = resp.reportingHealthDepartment;
    profile.Middlename = resp.middleName;
    profile.SubJurisdiction = resp.subJurisdiction;

    profile.BPaasInfo.BlockchainProofHash = resp.blockChainHashCode;
    profile.BPaasInfo.BPaaSRole = resp.userRoles;
    profile.BPaasInfo.UserID = resp.userID;
    profile.BPaasInfo.TenantID = resp.tenantID;
    profile.BPaasInfo.LedgerName = "ContactTrace";
    profile.BPaasInfo.RequestingUserID = resp.userID;


    profile.IsLoggedIn = true;

    return profile;
  }

  ///REGISTRATION


  ShowRegisterPage() {
    this.resgistrationErrorMessage = undefined;
    this.ShowLogin = false;
    this.newUserProfile = new UserProfile();
    this.ShowNewAcctMsg = false;;
    this.ConfirmPassword = undefined;

  }
  ShowLoginPage() {
    this.ShowLogin = true;
    this.newUserProfile = undefined;
    this.ShowNewAcctMsg = false;
    this.ConfirmPassword = undefined;

  }
  ComparePassword() {
    if (this.ConfirmPassword && this.newUserProfile.Password) {
      if (this.newUserProfile.Password != this.ConfirmPassword) {
        this.isPasswordMatched = false;
      } else {
        this.isPasswordMatched = true;
      }

    }
  }

  _register() {
    this.isLoading = true;
    let response: RegistrationRespone = this.loginService.Register(this.newUserProfile);

    if (response.success) {
      this.ShowLogin = true;
      this.ShowNewAcctMsg = true;
      this.newUserProfile = undefined;
      this.ConfirmPassword = undefined;
    }
    else {
      this.resgistrationErrorMessage = "Unable to create your account. " + response.message;
    }

    this.isLoading = false;

  }

  register() {

    this.isLoading = true;
    let resp: RegistrationRespone;
    try {

      let request: RegistrationRequest = this.CreateRegistrationRequest();
      console.log(request);
      console.log(this.baseUrl);
      this.httpClient.post<RegistrationRespone>(this.baseUrl + 'api/registration', request).subscribe(result => {


        resp = result;

        console.log(resp);

        if (resp.success) {
          let message;

          //if (resp.message)
          //  message = resp.message;
          //else
            message = "Your account is successfully created! Please wait for your system Admin to activate your account before you login to your account.";
          let info: ModalData = new ModalData(message, "Login", "Success");

          const dialogRef = this.modal.open(BooleanModalComponent, {
            width: '500px',
            data: info
          });

          dialogRef.afterClosed().subscribe(result => {

            this.ShowLogin = true;
            this.newUserProfile = undefined;
            this.ConfirmPassword = undefined;


          });
          this.isLoading = false;

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

        let info: ModalData = new ModalData("Unexpected error occured!!", "Close", "Error");

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

  CreateRegistrationRequest(): RegistrationRequest {
    let req: RegistrationRequest = new RegistrationRequest();
    req.Email = this.newUserProfile.Email;
    req.Jurisdiction = this.newUserProfile.Jurisdiction;
    req.Password = this.newUserProfile.Password;
    req.FirstName = this.newUserProfile.Firstname;
    req.LastName = this.newUserProfile.Lastname;
    req.Organization = this.newUserProfile.Organization;
    req.Phone = this.newUserProfile.Phone;
    req.MiddleName = this.newUserProfile.Middlename;
    req.SubJurisdiction = this.newUserProfile.SubJurisdiction;
    req.ReportingHealthDepartment = this.newUserProfile.ReportingHealthDepartment;
    return req;

  }


}
