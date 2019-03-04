import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('isAuthenticated', appReducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
