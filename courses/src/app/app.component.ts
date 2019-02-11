import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { User } from './user/user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'courses';
  public user: User;
  public isAuthenticated: Boolean = false;
  private usersSubscription: Subscription;

  constructor(private authService: AuthorizationService, private router: Router) {}

  ngOnInit() {
    this.init();
    this.authService.onAuthenticated.subscribe((val) => this.isAuthenticated = val);
  }

  private init(): void {
   this.usersSubscription = this.authService.getUserInfo().subscribe((res: User) => {
      this.user = res;
    });
  }

  logout() {
    this.authService.loginOut();
    this.router.navigate(['/login']);
  }

  public ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
