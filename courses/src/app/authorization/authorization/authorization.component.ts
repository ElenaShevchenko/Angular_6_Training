import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  public userLogin: string;
  public userPassword: string;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.authorizationService.isAuthenticated) {
      this.authorizationService.loginOut();
    }
  }

  login() {
    this.authorizationService
      .login(this.userLogin, this.userPassword)
      .subscribe(() => this.router.navigate(['/courses']));
  }
}
