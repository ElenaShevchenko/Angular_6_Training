import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'courses';
  public userName: string;
  public isAuthenticated: Boolean = false;

  constructor(private authService: AuthorizationService, private router: Router) {}

  ngOnInit() {
    const user = this.authService.getUserInfo();
    this.userName = user.firstName + ' ' + user.lastName;
    this.authService.onAuthenticated.subscribe((val) => this.isAuthenticated = val);
  }

  logout() {
    this.authService.loginOut();
    this.router.navigate(['/login']);
  }
}
