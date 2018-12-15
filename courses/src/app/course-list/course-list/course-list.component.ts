import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: CourseItem[] = [];

  constructor(private courseService: CourseService ) { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
  }

  removeCourse(item) {
    console.log('remove course' + item.id);
  }

  loadMore () {
    console.log('Load more');
  }

}
