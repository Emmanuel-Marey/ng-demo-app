import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public clearData() {
    sessionStorage.clear();
  }

  public getData(key: string) {
    let value = sessionStorage.getItem(key) || "";
    return value;
  }

  public saveData(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public removeData(key: string) {
    sessionStorage.removeItem(key);
  }
}
