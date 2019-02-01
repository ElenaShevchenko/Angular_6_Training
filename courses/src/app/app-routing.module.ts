import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './course-list/add-course-page/add-course-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseListComponent},
  {path: 'courses/new', component: AddCoursePageComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
