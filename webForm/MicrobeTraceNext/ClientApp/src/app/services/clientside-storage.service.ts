import { Injectable, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApplicationDataService } from './application-data.service';
import { MicrobeTraceData } from '../DTO/microbetrce-data';
import { UserProfile } from '../DTO/user-profile';
import { EncryptionService } from './encryption.service';
//import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class ClientsideStorageService implements OnInit {

  StorageKey: string;
  StorageTimeOut: number;
  ngOnInit(): void {
    this.dataService.Change.subscribe(data => {
      this.dataService.MicrobeTraceData = data;
    });
  }
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private dataService:ApplicationDataService, private encryptionService : EncryptionService ) {
    this.StorageKey = "29602d37-5a80-44aa-86ab-6c8396ffdcfe";
    this.StorageTimeOut = 86400000;
  }

  SaveData(data: MicrobeTraceData) {

    data.Expiration = Date.now();
    this.storage.set(this.StorageKey, this.encryptionService.encryptData(data.UserProfile));
    let dataKey:string = this.StorageKey + data.UserProfile.Email;
    this.storage.set(dataKey, this.encryptionService.encryptData(data));


  }

//  schema: JSONSchema = {
//     type: 'object',
//     properties: {
//       Expiration: { type: 'number' },
//     },
//     required: ['Expiration']
//   };

  RetrieveData() {
    let userstring: string = this.storage.get(this.StorageKey);
    if(userstring != undefined && userstring != null){
      let user: UserProfile = this.encryptionService.decryptData(userstring);
      if(user.IsLoggedIn){
        let dataKey:string = this.StorageKey + user.Email;
        let data: string = this.storage.get(dataKey);

        if (data != undefined && data!=null) {
          let microbeTraceData: MicrobeTraceData = this.encryptionService.decryptData(data);
          if (!this.isDataExpired(microbeTraceData.Expiration)) {
            this.dataService.MicrobeTraceData = microbeTraceData;
            this.dataService.update(this.dataService.MicrobeTraceData);
          }

        }
      }
    }

  }


  FindUserData(user: UserProfile): MicrobeTraceData {
    if(user != undefined && user != null){

      let dataKey:string = this.StorageKey + user.Email;
      let data: MicrobeTraceData = this.storage.get(dataKey);

      if (data != undefined && data!=null) {
        let microbeTraceData: MicrobeTraceData = this.encryptionService.decryptData(data);
          this.dataService.MicrobeTraceData = microbeTraceData;
          this.dataService.MicrobeTraceData.UserProfile = user;
          this.dataService.update(this.dataService.MicrobeTraceData);
          return this.dataService.MicrobeTraceData;
      }else{
        let newData: MicrobeTraceData = new MicrobeTraceData();
        newData.UserProfile = user;
        return newData;
      }
    }

  }
  isDataExpired(exp: number): boolean {
    let today: number = Date.now();
    let duration: number = today - exp;

    if (duration > this.StorageTimeOut)
      return true;
    else
      return false;
  }

  RemoveData() {
    this.storage.remove(this.StorageKey);//.subscribe(() => {});;
  }

}
