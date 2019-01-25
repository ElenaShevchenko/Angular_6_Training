import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../custom-pipes/filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseList: CourseItem[] = [];

  constructor(private courseService: CourseService, private _filterPipe: FilterPipe) { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
  }

  doSearch(searchValue) {
    this.courseList = this.courseService.getCourseList();
    this.courseList = this._filterPipe.transform(this.courseList, searchValue);
  }

  removeCourse(item) {
    const modal = prompt('Do you really want to delete this course?', 'Yes');
    if (modal) {
      this.courseList = this.courseService.removeCourse(item.id);
    }
  }

  loadMore () {
    console.log('Load more');
  }

}
