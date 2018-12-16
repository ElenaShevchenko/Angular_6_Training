import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {CourseItem} from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  @Output() clickButton = new EventEmitter<CourseItem>();

  constructor() { }

  ngOnInit() {
  }

  click () {
    this.clickButton.emit(this.courseItem);
  }

}
