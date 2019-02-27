import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppStore } from '../../app-store';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public courseList$: Observable<CourseItem[]> = this.store$.pipe(select((state) => state.courseList.items));

  public count = 5;
  private destroy$ = new Subject();

  constructor(
    private courseService: CourseService,
    private store$: Store<AppStore>
  ) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.store$.dispatch({ type: 'GET_COURSE' });
  }


  doSearch(searchValue) {
    this.courseService
      .searchEntries(searchValue)
      .pipe(takeUntil(this.destroy$));
  }

  removeCourse(item) {
    const modal = prompt('Do you really want to delete this course?', 'Yes');
    if (modal) {
      this.store$.dispatch({ type: 'REMOVE_COURSE', courseId: item.id });
    }
  }

  loadMore() {
    this.count = this.count + 5;
    this.store$.dispatch({ type: 'LOAD_MORE' });
  }

}
