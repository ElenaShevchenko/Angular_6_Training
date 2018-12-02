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
        title: 'Course Title',
        creationDate: new Date(),
        durationInMin: 115,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
      {
        id: 2,
        title: 'Course Title',
        creationDate: new Date(),
        durationInMin: 115,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
      {
        id: 3,
        title: 'Course Title',
        creationDate: new Date(),
        durationInMin: 35,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
      {
        id: 4,
        title: 'Course Title',
        creationDate: new Date(),
        durationInMin: 25,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
      {
        id: 5,
        title: 'Course Title',
        creationDate: new Date(),
        durationInMin: 34,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
    ];
  }
}
