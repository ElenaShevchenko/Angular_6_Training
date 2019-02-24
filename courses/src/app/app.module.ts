import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CourseListModule } from './course-list/course-list.module';
import { UserModule } from './user/user.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { AuthInterceptor } from './auth-interceptor';
import { LoadingScreenInterceptor } from './loading.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CourseEffects } from './course-list/course.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './redusers';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule,
    UserModule,
    AuthorizationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CourseEffects]),
  ],
  providers: [
    AuthGuard,
    AuthorizationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
