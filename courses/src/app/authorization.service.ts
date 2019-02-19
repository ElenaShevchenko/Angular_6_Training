import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import { User } from './user/user.model';

const BASE_URL = 'http://localhost:3004/auth/';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  public onAuthenticated = new EventEmitter(false);

  constructor(
    private http: HttpClient,
  ) {
    this.onAuthenticated.emit(false);
  }

  public login(login, password) {
    return this.http
      .post<UserToken>(`${BASE_URL}login`, { login: login, password: password })
      .pipe(
        tap((res) => {
          localStorage.setItem('fakeToken', res.token);
          this.onAuthenticated.emit(true);
        }),
      );
  }

  public loginOut() {
    this.onAuthenticated.emit(false);
  }

  public getUserInfo() {
    return this.http.post<User>(`${BASE_URL}userInfo`, {});
  }
}

interface UserToken {
  token: string;
}
