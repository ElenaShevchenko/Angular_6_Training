import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent, ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    FooterComponent,  ]
})
export class CoreModule { }
