import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseItem} from '../course-item.model';
import {CourseService} from '../course.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  public courseItem: CourseItem;
  public routeParams: any = {};

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data.id;
    });
    this.courseItem = this.courseService.getCourseById(this.routeParams.id);
  }

  save() {
    this.courseService.updateCourse(this.courseItem);
    this.router.navigate(['/courses']);
  }

}
