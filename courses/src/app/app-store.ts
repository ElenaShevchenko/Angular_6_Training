import {AuthorDb, CourseItem} from './course-list/course-item.model';

export interface AppStore {
  isAuthenticated: boolean;
  courseList: { items: CourseItem[], currentLength: number };
  authors: AuthorDb[];
}
