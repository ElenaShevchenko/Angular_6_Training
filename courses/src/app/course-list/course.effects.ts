import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {map, mergeMap, catchError, tap} from 'rxjs/operators';
import { CourseService } from './course.service';



@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  @Effect()
  loadCourses$ = this.actions$
    .pipe(
      ofType('GET_COURSE'),
      mergeMap(() => this.courseService.getCourseList(0, 5)
        .pipe(
          map(courses => ({ type: 'GET_COURSE Loaded Success', payload: courses })),
          catchError(() => of({ type: 'GET_COURSE Loaded Error' }))
        ))
    );
}
