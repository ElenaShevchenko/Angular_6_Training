import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})

export class AuthorizationComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizationService.isAuthenticated;
  }

  login() {
    this.authorizationService.login();
    console.log('login');
  }

}
