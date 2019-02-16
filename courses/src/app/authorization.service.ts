import {EventEmitter, Injectable } from '@angular/core';
import { User } from './user/user.model';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:3004/auth/';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  public isAuthenticated: Boolean = false;
  public onAuthenticated = new EventEmitter(false);

  constructor( private http: HttpClient) {
    this.onAuthenticated.emit(false);
  }

  public login (login, password) {
    console.log(login);
    this.onAuthenticated.emit(true);
    return this.http.post<User>(`${BASE_URL}login`,  {login: login, password: password});
  }

  public loginOut () {
    this.onAuthenticated.emit(false);
  }

  public getUserInfo() {
    return this.http.post<User>(`${BASE_URL}userInfo`, {});
  }
}
