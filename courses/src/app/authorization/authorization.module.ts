import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorizationRoutingModule } from './authorization-routing.module';


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('isAuthenticated', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    TranslateModule,
    AuthorizationRoutingModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
