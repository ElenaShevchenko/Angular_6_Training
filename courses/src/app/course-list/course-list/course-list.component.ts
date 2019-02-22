import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: CourseItem[] = [];
  public isCoursePageOpened: boolean;
  public count = 5;

  private destroy$ = new Subject();

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.getCourse();
    this.isCoursePageOpened = false;
  }

  private getCourse() {
    this.courseService
      .getCourseList(0, this.count)
      .subscribe((res) => this.courseList = res);
  }

  doSearch(searchValue) {
    this.courseService
      .searchEntries(searchValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => this.courseList = res);
  }

  removeCourse(item) {
    const modal = prompt('Do you really want to delete this course?', 'Yes');
    if (modal) {
      this.courseService
        .removeCourse(item.id)
        .subscribe(() => this.getCourse());
    }
  }

  loadMore() {
    this.count = this.count + 5;
    this.getCourse();
  }

}
