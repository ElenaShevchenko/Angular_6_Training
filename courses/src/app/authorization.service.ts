import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  public isAuthenticated: boolean;
  private user: User;
  private userMask: string;

  constructor() {
    this.isAuthenticated = false;
    this.userMask = 'user_';
    this.user = {
      id: 123,
      firstName: 'Ivan',
      lastName: 'Ivanov',
    };
  }

  public login () {
    localStorage.setItem(this.userMask + this.user.id, this.user.toString());
    this.isAuthenticated = true;
    console.log('login service');
  }

  public loginOut () {
    console.log('logout service');
    const lsLen = localStorage.length;
    if (lsLen > 0) {
      for (let i = 0; i < lsLen; i++) {
        const key = localStorage.key(i);
        if (key.indexOf(this.userMask) === 0) {
          return localStorage.getItem(key);
        }
      }
    }
    this.isAuthenticated = false;
  }

  public getUserInfo () {
    return this.user;
  }

}
