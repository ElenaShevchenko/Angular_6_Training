import {Injectable} from '@angular/core';
import {CourseItem} from './course-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {debounceTime, map, distinctUntilChanged, switchMap, filter, tap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';
const queryUrl  = '?textFragment=';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private list: CourseItem[];
  private searchTerm: Observable<{}>;

  constructor( private http: HttpClient ) {
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

  public  getCourseList(start, count) {
    return this.http.get<CourseItem[]>(`${BASE_URL}?start=${start}&count=${count}`);
  }

  public searchEntries(term) {
    return this.http.get<CourseItem[]>(BASE_URL + queryUrl + term)
      .pipe(
        map((items) => items.map((item) => ({
          id: item.id,
          title: item.name,
          creationDate: new Date (item.date),
          durationInMin: item.length,
          description: item.description,
          topRated: item.isTopRated,
          author: item.authors.firstName,
        }))));
  }

 /* public search (textFragment) {
    return this.http.get<CourseItem[]>(`${BASE_URL}?textFragment=${textFragment}`);
  }*/

  public createCourse(item): any {
     item.id = this.list.length++;
     item.topRated = false;
     return this.list.concat([item]);
  }

  public  getCourseById(id) {
    return this.http.get<CourseItem>(`${BASE_URL}/${id}`);
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
    return this.http.delete<CourseItem>(`${BASE_URL}/${id}`);
  }
}
