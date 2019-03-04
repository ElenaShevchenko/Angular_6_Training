import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppStore } from '../../app-store';
import { CourseItem } from '../course-item.model';
import { RemoveCourse, Search, GetCourse, LoadMore } from '../course.effects';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public courseList$: Observable<CourseItem[]> = this.store$.pipe(select((state) => state.courseList.items));

  private destroy$ = new Subject();

  constructor(
    private store$: Store<AppStore>
  ) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.store$.dispatch(new GetCourse());
  }


  doSearch(searchValue) {
    this.store$.dispatch(new Search({ searchValue: searchValue}));
  }

  removeCourse(item) {
    const modal = prompt('Do you really want to delete this course?', 'Yes');
    if (modal) {
      this.store$.dispatch(new RemoveCourse({ courseId: item.id }));
    }
  }

  loadMore() {
    this.store$.dispatch(new LoadMore());
  }

}
