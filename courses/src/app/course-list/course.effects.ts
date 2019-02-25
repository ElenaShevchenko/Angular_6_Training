import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { CourseService } from './course.service';



@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) { }

  @Effect()
  loadCourses$ = this.actions$
    .pipe(
      ofType('GET_COURSE'),
      switchMap(() => this.courseService.getCourseList(0, 5)),
      map(courses => ({ type: 'GET_COURSE Loaded Success', payload: courses })),
      catchError(() => of({ type: 'GET_COURSE Loaded Error' })),
    );

  @Effect()
  loadMore$ = this.actions$
    .pipe(
      ofType('LOAD_MORE'),
      // get value from store (withLatestFrom)
      switchMap((currentLength) => this.courseService.getCourseList(0, currentLength + 5)),
      // update currentLength value in store (currentLength + 5)
      map(courses => ({ type: 'GET_COURSE Loaded Success', payload: courses })),
      catchError(() => of({ type: 'GET_COURSE Loaded Error' })),
    );
}
