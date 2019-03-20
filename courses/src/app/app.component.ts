import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from './authorization/authorization.service';
import { Router } from '@angular/router';
import { User } from './user/user.model';
import { Subscription, BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, OnDestroy {
  public title = 'courses';
  public user: User;
  public isAuthenticated$ = new BehaviorSubject(false);
  private usersSubscription: Subscription;
  private authServiceSubscription: Subscription;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
   this.authServiceSubscription = this.authService.isAuthenticated$
      .subscribe((val) => {
        this.isAuthenticated$.next(val);
        if (val) {
          this.getUserInfo();
        }
      });
  }

  private getUserInfo() {
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
    this.authServiceSubscription.unsubscribe();
  }
}
