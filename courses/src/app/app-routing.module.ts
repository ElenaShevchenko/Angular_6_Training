import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './course-list/add-course-page/add-course-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { EditCourseComponent } from './course-list/edit-course/edit-course.component';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  {path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    },
  {path: 'login',
   component: AuthorizationComponent,
  },
  {path: 'courses',
   component: CourseListComponent,
   canActivate: [AuthGuard]},
  {path: 'courses/new',
   component: AddCoursePageComponent,
   canActivate: [AuthGuard]},
  {path: 'courses/:id',
   component: EditCourseComponent,
   canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];


