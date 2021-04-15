import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
//import { CustomReuseStrategy } from './shared-functionality/custom-reuse-strategy';
//import { RouteReuseStrategy } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


import { CustomFormsModule } from 'ng2-validation'
import { StorageServiceModule } from 'ngx-webstorage-service';

import { LoginService } from './services/login.service';
import { ApplicationDataService } from './services/application-data.service';
import { CustomFocusDirective } from './utils/custom-focus.directive';

import { CustomReuseStrategy } from './utils/custom-reuse-strategy';
import { RouteReuseStrategy } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SectionSelectComponent } from './section-select/section-select.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooleanModalComponent } from './boolean-modal/boolean-modal.component';
import { LoaderComponent } from './loader/loader.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PhoneMaskDirective } from './utils/phone-mask.directive';
import { CaseInvestigationComponent } from './case-investigation/case-investigation.component';
import { ListModalComponent } from './list-modal/list-modal.component';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    SectionSelectComponent,
    HeaderComponent,
    FooterComponent,
    BooleanModalComponent,
    ListModalComponent,
    LoaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,

    CustomFocusDirective,
    PhoneMaskDirective,

    SearchComponent,

    ContactComponent,

    ProfileComponent,

    CaseInvestigationComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //Storage NPM
    StorageServiceModule,

    //Angular Material
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,

    //Form Validation NPM
   CustomFormsModule,




    NgIdleKeepaliveModule.forRoot(),

    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "investigate",
        component: CaseInvestigationComponent
      },
      //{
      //  path: "profile",
      //  component: ProfileComponent
      //},
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: 'form', component: SectionSelectComponent,
        children: [
          {
            path: "section1",
            component: Section1Component
          },
          {
            path: "section2",
            component: Section2Component
          },
          {
            path: "section3",
            component: Section3Component
          },
          {
            path: "section4",
            component: Section4Component
          },
          {
            path: "section5",
            component: Section5Component
          },
          {
            path: "section6",
            component: Section6Component
          },
          {
            path: "section7",
            component: Section7Component
          },
          {
            path: "section8",
            component: Section8Component
          }         
        ]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }

    ]),


    BrowserAnimationsModule,

    // Addess Auto complete important !!!
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDn8kTbF0Zj_-CiwUPMu3SotYau1s0x47U',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },

    LoginService,
    ApplicationDataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BooleanModalComponent,
    ListModalComponent

  ]
})
export class AppModule { }
