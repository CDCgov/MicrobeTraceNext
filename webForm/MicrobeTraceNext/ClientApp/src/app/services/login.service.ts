import { Injectable } from '@angular/core';
import { ClientsideStorageService } from './clientside-storage.service';
import { ApplicationDataService } from './application-data.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../DTO/user-profile';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { ModalData } from '../DTO/modal-data';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationRespone } from '../DTO/API-DTO/RegistrationRespone';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private clientsideStorage: ClientsideStorageService, private dataService: ApplicationDataService, private modal: MatDialog ) { }

  public authenticateUser(): MicrobeTraceData{
    ////console.log.log("Inside authenticateUser");
    this.clientsideStorage.RetrieveData();
    if (this.dataService.MicrobeTraceData != undefined && this.dataService.MicrobeTraceData.UserProfile != undefined) {
      return this.dataService.MicrobeTraceData;
    } else {
      return null;
    }
  }

  public submitLogin(email: string, password: string):UserProfile {
    let user: UserProfile = new UserProfile();
    user.Firstname = "Test";
    user.Lastname = "Login";
    user.Email = email;
    user.IsLoggedIn = true;
    return user;
    // : Observable<LoginData> {
    //   return this.post<LoginData>('/api/Login', request)
    //     .pipe(
    //       map(response => response),
    //       catchError(err => {
    //         ////console.log.log('caught error, providing fallback value...', err);
    //         return this.handleError(err);
    //       })
    //     );


  }
  Register(user: UserProfile): RegistrationRespone{

    let response: RegistrationRespone = new RegistrationRespone();
    response.success = true;
    response.message = "Email already exist!";

    return response;
  }

}
