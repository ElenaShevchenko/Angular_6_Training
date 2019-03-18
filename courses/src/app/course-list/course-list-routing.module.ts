import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AuthGuard } from '../authorization/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: EditCourseComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }
