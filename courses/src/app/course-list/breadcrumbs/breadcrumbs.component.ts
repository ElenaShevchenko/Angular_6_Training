import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import {CourseItem, RouteParamModel} from '../course-item.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public courseTitle: String = '';
  public routeParams: RouteParamModel = {};

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.routeParams.id = data.id;
      }
    });
    if ( this.routeParams.id) {
      this.courseService.getCourseById(this.routeParams.id).subscribe((res: CourseItem) => {
        this.courseTitle =  res.title;
      });
    }
  }
}
