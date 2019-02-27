import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, withLatestFrom, take} from 'rxjs/operators';
import { CourseService } from './course.service';
import { select, Store } from '@ngrx/store';
import { AppStore } from '../app-store';




@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    public store$: Store<AppStore>
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
      withLatestFrom(
        this.store$.select(state => state.courseList.currentLength)
       ),
      switchMap((currentLength) => {
        return this.courseService.getCourseList(0, currentLength[1] + 5); }),
      // update currentLength value in store (currentLength + 5)
      map(courses => ({ type: 'GET_COURSE Loaded Success', payload: courses })),
      catchError(() => of({ type: 'GET_COURSE Loaded Error' })),
    );

  @Effect()
  removeCourse$ = this.actions$
    .pipe(
      ofType('REMOVE_COURSE'),
      tap(action => action),
      switchMap((action) => this.courseService.removeCourse(action.payload)),
      map(courses => ({ type: 'REMOVE_COURSE Success', payload: courses })),
      catchError(() => of({ type: 'REMOVE_COURSE Loaded Error' })),
    );
}
