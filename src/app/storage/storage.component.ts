import { Component, Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { SessionStorageService } from '../session-storage.service';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';
import { addHours, addMinutes } from 'date-fns';
import { POKEMONS } from '../mock/pokemon-list';
import { Pokemon } from '../mock/pokemon';

@Injectable({
  providedIn: 'root'
})
class UserToken {
  name: string = "";
  password: string = "";
  uuid: string = "";
};

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styles: [
  ]
})
export class StorageComponent {
  private readonly USER = 'USER';

  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private userToken: UserToken,
    private cookieService: CookieService) {
  }

  public localStorageClearData(): void {
    console.log("local storage (clear data):");
    this.localStorageService.clearData();
    this.localStorageService.saveData("1", "value 1");
    let value: string = this.localStorageService.getData("1");
    console.log("  - 'value 1' VS '" + value + "'");
  }

  public localStorageSaveData(): void {
    console.log("local storage (save data)");
    this.localStorageService.saveData("2", "value 2");
  }

  public localStorageLoadData(): void {
    console.log("local storage (load data):");
    let value: string = this.localStorageService.getData("2");
    console.log("  - 'value 2' VS '" + value + "'");
  }

  public localStorageSavePokemon(): void {
    console.log("local storage (save pokemon)");
    const pokemons: Pokemon[] = POKEMONS;
    let json = JSON.stringify(pokemons);
    console.log(json);
    this.localStorageService.saveData("pokemons", json);
  }

  public localStorageLoadPokemon(): void {
    console.log("local storage (load pokemon):");
    let stringifiedData: string = this.localStorageService.getData("pokemons");
    if (stringifiedData) {
      let pokemons = <Pokemon[]>JSON.parse(stringifiedData);
      console.log(pokemons);
    } 
  }

  public sessionStorageClearData(): void {
    console.log("session storage (clear data):");
    this.sessionStorageService.clearData();
    this.sessionStorageService.saveData("1", "value 1");
    let value: string = this.sessionStorageService.getData("1");
    console.log("  - 'value 1' VS '" + value + "'");
  }

  public sessionStorageSaveData(): void {
    console.log("session storage (save data)");
    this.sessionStorageService.saveData("2", "value 2");
  }

  public sessionStorageLoadData(): void {
    console.log("session storage (load data):");
    let value: string = this.sessionStorageService.getData("2");
    console.log("  - 'value 2' VS '" + value + "'");
  }

  public createCookie(): void {
    console.log("create user cookie:");

    this.userToken.name = "login";
    this.userToken.password = "password"
    this.userToken.uuid = uuidv4();

    const date: Date = addMinutes(new Date(), 1);
    this.cookieService.set(this.USER, JSON.stringify(this.userToken), { expires: date });
  }

  public getCookie(): void {
    console.log("load user cookie:");

    let stringifiedData: string = this.cookieService.get(this.USER);
    if (stringifiedData) {
      let parsedJson: any = JSON.parse(stringifiedData);
      console.log("  - Json: ", parsedJson);
    } 
  }

  public getAllCookies(): void {
    console.log("get all cookies:");

    let parsedJson: any = this.cookieService.getAll();
    console.log("  - Json: ", parsedJson);
  }
}
