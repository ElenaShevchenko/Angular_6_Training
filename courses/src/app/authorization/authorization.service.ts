import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../user/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


const BASE_URL = 'http://localhost:3004/auth/';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private isTokenExist = localStorage.getItem('fakeToken') || false;
  public isAuthenticated$ = new BehaviorSubject(!!this.isTokenExist);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public login(login, password) {
    return this.http
      .post<UserToken>(`${BASE_URL}login`, { login: login, password: password })
      .pipe(
        tap((res) => {
          localStorage.setItem('fakeToken', res.token);
          this.isAuthenticated$.next(true);
          this.router.navigate(['/courses']);
        }),
      );
  }

  public loginOut() {
    this.isAuthenticated$.next(false);
    localStorage.removeItem('fakeToken');
  }

  public getUserInfo() {
    return this.http.post<User>(`${BASE_URL}userInfo`, {});
  }
}

interface UserToken {
  token: string;
}
