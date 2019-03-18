import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  },
  {
    path: 'courses/new',
    component: AddCoursePageComponent
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }
