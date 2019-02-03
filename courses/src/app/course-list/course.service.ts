import {Injectable} from '@angular/core';
import {CourseItem} from './course-item.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private list: CourseItem[];

  constructor() {
    this.list =  [
      {
        id: 1,
        title: 'Course',
        creationDate: new Date(2018, 4, 5),
        durationInMin: 60,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: true,
        author: 'Pushkin'
      },
      {
        id: 2,
        title: 'Title',
        creationDate: new Date(2019, 0, 1),
        durationInMin: 75,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false,
        author: 'Tolkien'
      },
      {
        id: 3,
        title: 'Some Title',
        creationDate: new Date(2017, 2, 6),
        durationInMin: 135,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false,
        author: 'Smith'
      },
      {
        id: 4,
        title: 'Course JavaScript',
        creationDate: new Date(),
        durationInMin: 120,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: true,
        author: 'Orange'
      },
      {
        id: 5,
        title: 'Angular',
        creationDate: new Date(),
        durationInMin: 34,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        topRated: false,
        author: 'Lamont'
      },
    ];
  }

  public  getCourseList(): CourseItem[] {
    return this.list;
  }

  public  createCourse(item): any {
     item.id = this.list.length++;
     item.topRated = false;
     return this.list.concat([item]);
  }
  public  getCourseById(id): CourseItem {
    return this.list.find((element) => (element.id).toString() === id);
  }
  public  updateCourse(item): CourseItem[] {
     return this.list.map ((elem) => {
      if (elem.id === item.id) {
        return item;
      } else  {
        return elem; }
      });
  }
  public  removeCourse(id): any {
    const list = [...this.list];
    this.list.forEach((elem, index, arr) => {
      if (elem.id === id) {
        return list.splice (index, 1);
      }
    });
    this.list = list;
    return list;
  }
}
