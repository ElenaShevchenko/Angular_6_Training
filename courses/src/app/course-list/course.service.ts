import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CourseDb, CourseItem } from './course-item.model';

const BASE_URL = 'http://localhost:3004/courses';
const queryUrl = '?textFragment=';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  public getCourseList(start, count): Observable<CourseItem[]> {
    return this.http.get<CourseDb[]>(`${BASE_URL}?start=${start}&count=${count}`)
      .pipe(
        map((items) => this.convertToCourseItems(items)),
      );
  }

  public searchEntries(term): Observable<CourseItem[]> {
    return this.http.get<CourseDb[]>(BASE_URL + queryUrl + term)
      .pipe(
        map((items) => this.convertToCourseItems(items)),
      );
  }

  public createCourse(item) {
    const currentItem = this.convertToDBItemsCreate(item);
    return this.http.post<CourseDb>(`${BASE_URL}`, currentItem)
      .pipe();
  }

  public getCourseById(id) {
    return this.http.get<CourseItem>(`${BASE_URL}/${id}`);
  }

  public updateCourse(item) {
    const currentItem = this.convertToDBItemsUpdate(item);
    return this.http.put<CourseItem>(`${BASE_URL}/${item.id}`, currentItem)
      .pipe();
  }

  public removeCourse(id): any {
    return this.http.delete<CourseItem>(`${BASE_URL}/${id}`);
  }

  private convertToCourseItems(courses: CourseDb[]) {
    return courses.map((item) => ({
      id: item.id,
      title: item.name,
      creationDate: new Date(item.date),
      durationInMin: item.length,
      description: item.description,
      topRated: item.isTopRated,
      author: item.authors[0].firstName,
    }));
  }

  private convertToDBItemsCreate(item: CourseItem) {
    return {
      id: Math.random(),
      name: item.title,
      description: item.description,
      isTopRated: false,
      date: new Date(item.creationDate),
      authors: [
        {
          id: Math.random(),
          firstName: item.author,
          lastName: ''
        }
      ],
      length: item.durationInMin
    };
  }

  private convertToDBItemsUpdate(item: CourseItem) {
    return {
      id: item.id,
      name: item.title,
      description: item.description,
      isTopRated: false,
      date: new Date(item.creationDate),
      authors: [
        {
          id: Math.random(),
          firstName: item.author,
          lastName: ''
        }
      ],
      length: item.durationInMin
    };
  }
}
