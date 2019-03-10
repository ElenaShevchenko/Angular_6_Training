import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthorizationService } from './authorization.service';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
  ) {
  }

  canActivate() {
    const isTokenExist = localStorage.getItem('fakeToken') || false;
    return isTokenExist ? true : this.authService.isAuthenticated$;
  }
}
