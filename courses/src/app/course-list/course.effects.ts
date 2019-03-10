import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';

import { AppStore } from '../app-store';
import { CourseService } from './course.service';
import { CourseListActionTypes, CreateCourse, GetAuthors, GetCourse, LoadMore, RemoveCourse, Search, UpdateCourse } from './course.actions';


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
      map(courses => ({ type: CourseListActionTypes.GetCourseSuccess, payload: courses })),
      catchError(() => of({ type: CourseListActionTypes.GetCourseError})),
    );

  @Effect()
  loadMore$ = this.actions$
    .pipe(
      ofType<LoadMore>(CourseListActionTypes.LoadMore),
      withLatestFrom(
        this.store$.select(state => state.courseList.currentLength)
      ),
      switchMap((currentLength) => {
        return this.courseService.getCourseList(0, currentLength[1] + 5);
      }),
      mergeMap((courses) => ([
        { type: CourseListActionTypes.GetCourseSuccess, payload: courses },
        { type: CourseListActionTypes.UpdateCounter}])),
      catchError(() => of({ type: CourseListActionTypes.GetCourseError })),
    );

  @Effect()
  removeCourse$ = this.actions$
    .pipe(
      ofType<RemoveCourse>(CourseListActionTypes.RemoveCourse),
      switchMap((action) => this.courseService.removeCourse(action.payload.courseId)),
      map(() => new GetCourse()),
      catchError(() => of({ type: CourseListActionTypes.RemoveCourseError })),
    );

  @Effect()
  createCourse$ = this.actions$
    .pipe(
      ofType<CreateCourse>(CourseListActionTypes.CreateCourse),
      switchMap((action) => this.courseService.createCourse(action.payload.course)),
      map(() => new GetCourse()),
      catchError(() => of({ type: CourseListActionTypes.CreateCourseError })),
    );

  @Effect()
  updateCourse$ = this.actions$
    .pipe(
      ofType<UpdateCourse>(CourseListActionTypes.UpdateCourse),
      switchMap((action) => this.courseService.updateCourse(action.payload.course)),
      map(() => new GetCourse()),
      catchError(() => of({ type: CourseListActionTypes.UpdateCourseError })),
    );

  @Effect()
  search$ = this.actions$
    .pipe(
      ofType<Search>(CourseListActionTypes.Search),
      switchMap((action) => this.courseService.searchEntries(action.payload.searchValue)),
      map((courses) => ({ type: CourseListActionTypes.SearchSuccess, payload: courses })),
      catchError(() => of({ type: CourseListActionTypes.SearchError })),
        );

  @Effect()
  getAuthors$ = this.actions$
    .pipe(
      ofType<GetAuthors>(CourseListActionTypes.GetAuthors),
      switchMap(() => this.courseService.getAuthors()),
      map(authors => ({ type: CourseListActionTypes.GetAuthorsSuccess, payload: authors })),
      catchError(() => of({ type: CourseListActionTypes.GetAuthorsError })),
    );
}
