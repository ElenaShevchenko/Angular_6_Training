import { BehaviorSubject } from 'rxjs';
import { CourseItem } from './course-list/course-item.model';

export interface AppStore {
  isAuthenticated: BehaviorSubject<boolean> ;
  courseList: [CourseItem[]];
}
