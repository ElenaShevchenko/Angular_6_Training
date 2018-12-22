import { Injectable } from '@angular/core';
import {CourseItem} from './course-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public  getCourseList(): CourseItem[] {
    return [
      {
        id: 1,
        title: 'Course',
        creationDate: new Date(2018, 4, 5),
        durationInMin: 60,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: true,
      },
      {
        id: 2,
        title: 'Title',
        creationDate: new Date(2019, 0, 1),
        durationInMin: 75,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false,
      },
      {
        id: 3,
        title: 'Some Title',
        creationDate: new Date(2017, 2, 6),
        durationInMin: 135,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false,
      },
      {
        id: 4,
        title: 'Course JavaScript',
        creationDate: new Date(),
        durationInMin: 120,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: true,
      },
      {
        id: 5,
        title: 'Angular',
        creationDate: new Date(),
        durationInMin: 34,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false
      },
    ];
  }
}
