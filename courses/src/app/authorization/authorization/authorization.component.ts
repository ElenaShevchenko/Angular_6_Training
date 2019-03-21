import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { select, Store } from '@ngrx/store';
import { AppStore } from '../../app-store';
import { Login } from '../auth.effects';
import { Observable} from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  authForm = new FormGroup({
    userLogin: new FormControl('Warner' , [Validators.required]),
    userPassword: new FormControl('ea' , [Validators.required])
  });
  public isAuthenticated$ = new Observable();

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private store$: Store<AppStore>,
  ) {
  }

  ngOnInit() {
  this.isAuthenticated$ = this.store$.pipe(select((state) => state.isAuthenticated));
    if (this.authorizationService.isAuthenticated$.getValue()) {
      this.authorizationService.loginOut();
    }
  }

  login() {
    this.store$.dispatch(new Login({ userName: this.authForm.get('userLogin').value, password: this.authForm.get('userPassword').value }));
  }
}
