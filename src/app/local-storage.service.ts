import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

// npm install crypto-js
// npm install @types/crypto-js
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly PRIVATE_KEY: string = "123";

  constructor() { }

  public saveData(key: string, value: string) {
    let data = this.encrypt(value);
    localStorage.setItem(key, data);
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.PRIVATE_KEY).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.PRIVATE_KEY).toString(CryptoJS.enc.Utf8);
  }
}
