import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})

export class AuthorizationComponent {
  private userLogin: string;
  private userPassword: string;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  login() {
    this.authorizationService
      .login(this.userLogin, this.userPassword)
      .subscribe(() => this.router.navigate(['/courses']));
  }

}
