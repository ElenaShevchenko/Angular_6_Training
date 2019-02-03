import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthorizationService} from './authorization.service';



@Injectable()
export class AuthGuard implements CanActivate {
  public isAuthenticated: boolean;
  constructor(private authService: AuthorizationService) {
  }

  canActivate(): boolean {
    this.authService.onAuthenticated.subscribe((val) => this.isAuthenticated = val);
    return  this.isAuthenticated ? this.isAuthenticated : false;
  }
}


