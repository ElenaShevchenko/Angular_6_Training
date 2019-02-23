import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  public courseItem: CourseItem = {
    id: 1,
    title: '',
    creationDate:  new Date(),
    durationInMin: 1,
    description: '',
    topRated: false,
    author: ''
  };
  public routeParams: any = {};

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data.id;
    });
    this.courseService.getCourseById(this.routeParams.id).subscribe((res: any) => {
        this.courseItem = {
          id: res.id,
          title: res.name,
          creationDate: new Date (res.date),
          durationInMin: res.length,
          description: res.description,
          topRated: res.isTopRated,
          author: res.authors[0].firstName
        };
      });
  }

  save() {
    this.courseService
      .updateCourse(this.courseItem)
      .subscribe();
    this.router.navigate(['/courses']);
  }

}