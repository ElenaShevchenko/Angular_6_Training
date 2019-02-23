import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../../authorization.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public userName = '';
  private usersSubscription: Subscription;

  constructor(
    private authService: AuthorizationService,
  ) {
  }

  public ngOnInit() {
    this.usersSubscription = this.authService.getUserInfo().subscribe((res: User) => {
      this.userName = res.name.first + ' ' + res.name.last;
    });
  }

  public ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
