import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../custom-pipes/filter.pipe';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseList: CourseItem[] = [];
  public isCoursePageOpened: boolean;
  public start = 0;
  public count = 5;

  constructor(private courseService: CourseService, private _filterPipe: FilterPipe) { }



  ngOnInit() {
    this.getCourse();
    this.isCoursePageOpened = false;
  }

  private getCourse(): void {
    this.courseService.getCourseList(this.start, this.count).subscribe((res: any) => {
      this.courseList = res.map((item) => {
        return {
          id: item.id,
          title: item.name,
          creationDate: new Date (item.date),
          durationInMin: item.length,
          description: item.description,
          topRated: item.isTopRated,
          author: item.authors.firstName
        };
      });
    });
  }

  doSearch(searchValue) {
    this.courseService.search(searchValue).subscribe((res: any) => {
      this.courseList = res.map((item) => {
        return {
          id: item.id,
          title: item.name,
          creationDate: new Date (item.date),
          durationInMin: item.length,
          description: item.description,
          topRated: item.isTopRated,
          author: item.authors.firstName
        };
      });
    });
  }

  removeCourse(item) {
    const modal = prompt('Do you really want to delete this course?', 'Yes');
    if (modal) {
      this.courseService.removeCourse(item.id).subscribe((res: any) => {
        this.getCourse();
      });
    }
  }

  loadMore () {
   this.start = this.count;
   this.count = this.count + 5;
    this.getCourse();
  }

}
