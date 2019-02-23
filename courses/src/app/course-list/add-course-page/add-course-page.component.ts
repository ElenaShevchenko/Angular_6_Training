import {Component } from '@angular/core';
import { NewCourseModel } from '../new-course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent {
  public newCourseItem: NewCourseModel;

  constructor(private courseService: CourseService, private router: Router) {
    this.newCourseItem = {
      title: 'title',
      creationDate:  new Date(2018, 4, 5),
      durationInMin: 121,
      description: 'Description',
      author: 'Author'
    };
  }

  save() {
    this.courseService
      .createCourse(this.newCourseItem)
      .subscribe();
    this.router.navigate(['/courses']);
  }
}
