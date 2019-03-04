import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppStore } from '../app-store';
import { CourseService } from './course.service';
import { CourseItem, NewCourseItem } from './course-item.model';

export enum CourseListActionTypes {
  GetCourse = 'GET_COURSE',
  RemoveCourse = 'REMOVE_COURSE',
  CreateCourse = 'CREATE_COURSE',
  UpdateCourse = 'UPDATE_COURSE',
}

export class GetCourse implements Action {
  public readonly type = CourseListActionTypes.GetCourse;
}

export class RemoveCourse implements Action {
  public readonly type = CourseListActionTypes.RemoveCourse;
  constructor(public payload: { courseId: number }) { }
}

export class CreateCourse implements Action {
  public readonly type = CourseListActionTypes.CreateCourse;
  constructor(public payload: { course: NewCourseItem }) { }
}

export class UpdateCourse implements Action {
  public readonly type = CourseListActionTypes.UpdateCourse;
  constructor(public payload: { course: CourseItem }) { }
}

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
      ofType<GetCourse>(CourseListActionTypes.GetCourse),
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
        return this.courseService.getCourseList(0, currentLength[1] + 5);
      }),
      // update currentLength value in store (currentLength + 5)
      map(courses => ({ type: 'GET_COURSE Loaded Success', payload: courses })),
      catchError(() => of({ type: 'GET_COURSE Loaded Error' })),
    );

  @Effect()
  removeCourse$ = this.actions$
    .pipe(
      ofType<RemoveCourse>(CourseListActionTypes.RemoveCourse),
      switchMap((action) => this.courseService.removeCourse(action.payload.courseId)),
      map(() => new GetCourse()),
      catchError(() => of({ type: 'REMOVE_COURSE Loaded Error' })),
    );

  @Effect()
  createCourse$ = this.actions$
    .pipe(
      ofType<CreateCourse>(CourseListActionTypes.CreateCourse),
      switchMap((action) => this.courseService.createCourse(action.payload.course)),
      map(() => new GetCourse()),
      catchError(() => of({ type: 'CREATE_COURSE Loaded Error' })),
    );

  @Effect()
  updateCourse$ = this.actions$
    .pipe(
      ofType<UpdateCourse>(CourseListActionTypes.UpdateCourse),
      switchMap((action) => this.courseService.updateCourse(action.payload.course)),
      map(() => new GetCourse()),
      catchError(() => of({ type: 'UPDATE_COURSE Loaded Error' })),
    );
}
