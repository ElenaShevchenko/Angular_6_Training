import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const token = localStorage.getItem('fakeToken') || false;

export const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './authorization/authorization.module#AuthorizationModule'
  },
  {
    path: 'courses',
    loadChildren: './course-list/course-list.module#CourseListModule',
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];


