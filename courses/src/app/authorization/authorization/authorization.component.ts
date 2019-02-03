import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})

export class AuthorizationComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authorizationService.login();
    this.router.navigate(['/courses']);
  }

}
