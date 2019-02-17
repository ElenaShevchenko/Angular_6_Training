import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingComponent, ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingComponent]
})
export class CoreModule { }
