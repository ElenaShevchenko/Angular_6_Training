import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { CourseItem, RouteParamModel } from '../course-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public courseTitle: String = '';
  public routeParams: RouteParamModel = {};
  private routeParamsSubscription: Subscription;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe((data) => {
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

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
