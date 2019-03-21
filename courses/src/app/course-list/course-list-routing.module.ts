import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseGuard } from './course.guard';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
    canActivate: [CourseGuard]
  },
  {
    path: 'new',
    component: AddCoursePageComponent,
    canActivate: [CourseGuard]
  },
  {
    path: ':id',
    component: EditCourseComponent,
    canActivate: [CourseGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }
