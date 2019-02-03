import {EventEmitter, Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  public isAuthenticated: Boolean = false;
  private user: User;
  private userMask: string;
  public onAuthenticated = new EventEmitter(false);

  constructor() {
    this.onAuthenticated.emit(false);
    this.userMask = 'user_';
    this.user = {
      id: 123,
      firstName: 'Ivan',
      lastName: 'Ivanov',
    };
  }

  public login () {
    this.onAuthenticated.emit(true);
    localStorage.setItem(this.userMask + this.user.id, this.user.toString());
  }

  public loginOut () {
    const lsLen = localStorage.length;
    this.onAuthenticated.emit(false);
    if (lsLen > 0) {
      for (let i = 0; i < lsLen; i++) {
        const key = localStorage.key(i);
        if (key.indexOf(this.userMask) === 0) {
          return localStorage.getItem(key);
        }
      }
    }
  }

  public getUserInfo () {
    return this.user;
  }

}
