import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DurationPipe } from '../custom-pipes/duration.pipe';
import { FilterPipe } from '../custom-pipes/filter.pipe';
import { OrderByPipe } from '../custom-pipes/order-by.pipe';
import { courseListReducer } from '../redusers';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthorComponent } from './author/author.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEffects } from './course.effects';
import { CreationDateComponent } from './creation-date/creation-date.component';
import { DurationComponent } from './duration/duration.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HighlightItemDirective } from './highlightItem.directive';
import { SearchComponent } from './search/search.component';

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
    RouterModule,
    StoreModule.forFeature('courseList', courseListReducer),
    EffectsModule.forFeature([CourseEffects]),
    ReactiveFormsModule,
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
