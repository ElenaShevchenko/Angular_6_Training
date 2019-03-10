import { Action } from '@ngrx/store';
import { Author, CourseItem, NewCourseItem } from './course-item.model';

export enum CourseListActionTypes {
  GetCourse = 'GET_COURSE',
  LoadMore = 'LOAD_MORE',
  RemoveCourse = 'REMOVE_COURSE',
  CreateCourse = 'CREATE_COURSE',
  CreateCourseError = 'CREATE_COURSE Loaded Error',
  UpdateCourse = 'UPDATE_COURSE',
  UpdateCourseError = 'UPDATE_COURSE Loaded Error',
  UpdateCounter= 'UPDATE_COUNT',
  Search = 'SEARCH',
  SearchSuccess = 'SEARCH Loaded Success',
  SearchError = 'SEARCH Loaded Error',
  GetAuthors = 'GET_AUTHORS',
  GetAuthorsSuccess = 'GET_AUTHORS Loaded Success',
  GetAuthorsError = 'GET_AUTHORS Loaded Error',
  GetCourseSuccess = 'GET_COURSE Loaded Success',
  GetCourseError = 'GET_COURSE Loaded Error',
  RemoveCourseError = 'REMOVE_COURSE Loaded Error'
}

export class GetCourse implements Action {
  public readonly type = CourseListActionTypes.GetCourse;
}

export class GetCourseSuccess implements Action {
  public readonly type = CourseListActionTypes.GetCourseSuccess;
  constructor(public payload: { courses: CourseItem[] }) { }
}

export class GetCourseError implements Action {
  public readonly type = CourseListActionTypes.GetCourseError;
}

export class LoadMore implements Action {
  public readonly type = CourseListActionTypes.LoadMore;
}

export class RemoveCourse implements Action {
  public readonly type = CourseListActionTypes.RemoveCourse;
  constructor(public payload: { courseId: number }) { }
}

export class RemoveCourseError implements Action {
  public readonly type = CourseListActionTypes.RemoveCourseError;
}

export class CreateCourse implements Action {
  public readonly type = CourseListActionTypes.CreateCourse;
  constructor(public payload: { course: NewCourseItem }) { }
}

export class CreateCourseError implements Action {
  public readonly type = CourseListActionTypes.CreateCourseError;
}

export class UpdateCourse implements Action {
  public readonly type = CourseListActionTypes.UpdateCourse;
  constructor(public payload: { course: CourseItem }) { }
}

export class UpdateCourseError implements Action {
  public readonly type = CourseListActionTypes.UpdateCourseError;
}

export class UpdateCounter implements Action {
  public readonly type = CourseListActionTypes.UpdateCounter;
}

export class Search implements Action {
  public readonly type = CourseListActionTypes.Search;
  constructor(public payload: { searchValue: string }) { }
}

export class SearchSuccess implements Action {
  public readonly type = CourseListActionTypes.SearchSuccess;
  constructor(public payload: { courses: CourseItem[] }) { }
}

export class SearchError implements Action {
  public readonly type = CourseListActionTypes.SearchError;
}

export class GetAuthors implements Action {
  public readonly type = CourseListActionTypes.GetAuthors;
}

export class GetAuthorsSuccess implements Action {
  public readonly type = CourseListActionTypes.GetAuthorsSuccess;
  constructor(public payload: { authors: Author[] }) { }
}

export class GetAuthorsError implements Action {
  public readonly type = CourseListActionTypes.GetAuthorsError;
}
