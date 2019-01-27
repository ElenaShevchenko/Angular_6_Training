import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NewCourseModel } from '../new-course.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public newCourseItem: NewCourseModel;
  @Output() addButton = new EventEmitter<NewCourseModel>();
  @Output() cancelButton = new EventEmitter<Boolean>();

  constructor() {
    this.newCourseItem = {
      title: 'title',
      creationDate:  new Date(2018, 4, 5),
      durationInMin: 121,
      description: 'Description',
      author: 'Author'
    };
  }

  ngOnInit() {
  }

  save() {
      this.addButton.emit(this.newCourseItem);
  }

  cancel() {
    this.cancelButton.emit(false);
  }

}
