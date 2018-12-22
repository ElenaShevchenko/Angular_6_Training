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

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    HighlightItemDirective,
    OrderByPipe,
    DurationPipe,
    SearchComponent,
    AddCourseComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
    AddCourseComponent
  ]
})
export class CourseListModule { }
