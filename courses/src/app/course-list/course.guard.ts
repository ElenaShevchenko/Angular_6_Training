import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';

@Injectable()
export class CourseGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
  ) {
  }

  canActivate() {
    return this.authService.isAuthenticated$;
  }
}
