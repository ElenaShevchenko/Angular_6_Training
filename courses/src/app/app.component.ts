import {Component, OnChanges, OnInit} from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  public isAuthenticated: boolean;
  title = 'courses';

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizationService.isAuthenticated;
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    this.isAuthenticated = this.authorizationService.isAuthenticated;
  }

  logout() {
    this.authorizationService.loginOut();
    console.log('logout');
  }
}
