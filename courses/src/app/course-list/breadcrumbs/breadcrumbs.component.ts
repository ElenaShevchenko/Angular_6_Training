import {Component, OnInit} from '@angular/core';
import {CourseService} from '../course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public courseTitle: String = '';
  public routeParams: any = {};

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.routeParams.id = data.id;
      }
    });
    this.courseService.getCourseById(this.routeParams.id).subscribe((res: any) => {
      this.courseTitle =  res.name;
    });
  }




}
