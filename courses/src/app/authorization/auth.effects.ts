import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {AuthorizationService} from './authorization.service';
import { AppStore } from '../app-store';


export enum LoginActionTypes {
  Login = 'LOGIN',
}

export class Login implements Action {
  public readonly type = LoginActionTypes.Login;
  constructor(public payload: { userName: string, password: string }) { }
}

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthorizationService,
    public store$: Store<AppStore>
  ) { }

 @Effect()
  removeCourse$ = this.actions$
    .pipe(
      ofType<Login>(LoginActionTypes.Login),
      switchMap((action) => this.authService.login(action.payload.userName, action.payload.password)),
      map(() => ({ type: 'LOGIN Success' })),
      catchError(() => of({ type: 'LOGIN Error' })),
    );
}
