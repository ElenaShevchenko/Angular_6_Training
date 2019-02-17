import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { User } from '../user.model';
import {Subscription} from 'rxjs';
import {AuthorizationService} from '../../authorization.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public userName: String = '';
  private usersSubscription: Subscription;

  constructor(private authService: AuthorizationService, private router: Router) {
    this.init();
  }

  ngOnInit() {
  }

  private init(): void {
    this.usersSubscription = this.authService.getUserInfo().subscribe((res: User) => {
      this.userName = res.name.first + ' ' + res.name.last;
    });
  }

  public ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
