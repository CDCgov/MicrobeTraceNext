import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
 private EncryptionKey: string = "2bac45fe-42c7-4d21-9002-5c19924c9336";

  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.EncryptionKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.EncryptionKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  constructor() { }
}
