import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserNameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserNameProvider {

  private _username: string;

  constructor() {
  }

  get username(){
    return this._username;
  }

  set username(username){
    this._username = username;
  }
}