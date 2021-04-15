import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  headers: HttpHeaders;
  baseUrl: string;
  constructor(protected http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.baseUrl = _baseUrl;

    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        //'Authorization': 'my-auth-token',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': this.baseUrl,
        //'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST',
        //'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      })
    
  }

  protected post<T>(url: string, body: any | null): Observable<T> {
    let configUrl = this.baseUrl + url;
    return this.http.post<T>(configUrl, body, { headers: this.headers });
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //this.logService.logError(error.error.message);
      console.log('An error occurred:', error.error.message);
      return error.error.message;

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status === 401) {
        //this.logService.expireSession();
        console.log('401 error occurred:');

      }
      let msg = `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
      //this.logService.logError(msg);
       console.log(msg);
    
    }

    throw new Error(
      'An error has occurred. Please try again later.');
  };
}
