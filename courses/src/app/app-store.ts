import { CourseItem } from './course-list/course-item.model';

export interface AppStore {
  isAuthenticated: boolean;
  courseList: { items: CourseItem[], currentLength: number };
}
