import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { HighlightItemDirective } from './highlightItem.directive';
import { OrderByPipe } from '../custom-pipes/order-by.pipe';
import { DurationPipe } from '../custom-pipes/duration.pipe';
import { FilterPipe } from '../custom-pipes/filter.pipe';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CreationDateComponent } from './creation-date/creation-date.component';
import { DurationComponent } from './duration/duration.component';
import { AuthorComponent } from './author/author.component';
import { RouterModule } from '@angular/router';
import { EditCourseComponent } from './edit-course/edit-course.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    HighlightItemDirective,
    OrderByPipe,
    DurationPipe,
    SearchComponent,
    AddCourseComponent,
    FilterPipe,
    AddCoursePageComponent,
    CreationDateComponent,
    DurationComponent,
    AuthorComponent,
    EditCourseComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
    AddCourseComponent,
    AddCoursePageComponent,
    EditCourseComponent,
    BreadcrumbsComponent
  ]
})
export class CourseListModule { }
