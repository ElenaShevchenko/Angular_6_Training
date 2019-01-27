import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseItem} from '../course-item.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Output() triggerAddCoursePage = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
  }

  click () {
    this.triggerAddCoursePage.emit(true);
  }

}
