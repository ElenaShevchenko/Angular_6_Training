import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FooterComponent,
    AddCourseComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FooterComponent,
    AddCourseComponent
  ]
})
export class CoreModule { }
