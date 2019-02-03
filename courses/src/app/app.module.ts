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

const APP_PROVIDERS = [
  AuthGuard
];

@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule { }
