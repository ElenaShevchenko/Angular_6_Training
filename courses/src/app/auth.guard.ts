import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './authorization.service';



@Injectable()
export class AuthGuard implements CanActivate {
  public isAuthenticated: boolean;
  public routeUrl: any = {};

  constructor(private authService: AuthorizationService) {
    this.authService.onAuthenticated.subscribe((val) => this.isAuthenticated = val);
  }

  canActivate(): boolean {
    return this.isAuthenticated ? this.isAuthenticated : false;
  }
}


