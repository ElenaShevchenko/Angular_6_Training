import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {AuthorDb, CourseDb, CourseItem, Author} from './course-item.model';

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
    return this.http.post<CourseDb>(`${BASE_URL}`, this.convertToDBItemsCreate(item));
  }

  public getCourseById(id) {
    return this.http.get<CourseDb>(`${BASE_URL}/${id}`)
      .pipe(
        map((item) => this.convertToCourseItem(item)),
      );
  }

  public updateCourse(item) {
    return this.http.put<CourseItem>(`${BASE_URL}/${item.id}`, this.convertToDBItemsUpdate(item));
  }

  public removeCourse(id): Observable<CourseItem> {
    return this.http.delete<CourseItem>(`${BASE_URL}/${id}`);
  }

  public getAuthors() {
    return this.http.get<Author>(`http://localhost:3004/authors`);
  }

   private convertToAuthorDb(items: Author[]) {
     return items.map((item) => {
       const authorName = item.name.split(' ');
       return ({
         id: item.id,
         firstName: authorName[0],
         lastName: authorName[1]
       });     });
   }


  private convertToAuthor(items: AuthorDb[]) {
    return items.map((item) => ({
      id: item.id,
      name: item.firstName + ' ' + item.lastName
    }));
  }

  private convertToCourseItems(courses: CourseDb[]) {
    return courses.map((item) => ({
      id: item.id,
      title: item.name,
      creationDate: new Date(item.date),
      durationInMin: item.length,
      description: item.description,
      topRated: item.isTopRated,
      authors: this.convertToAuthor(item.authors),
    }));
  }

  private convertToCourseItem(item: CourseDb) {
    return {
      id: item.id,
      title: item.name,
      creationDate: new Date(item.date),
      durationInMin: item.length,
      description: item.description,
      topRated: item.isTopRated,
      authors: this.convertToAuthor(item.authors),
    };
  }

  private convertToDBItemsCreate(item: CourseItem) {
    return {
      id: Math.random(),
      name: item.title,
      description: item.description,
      isTopRated: false,
      date: new Date(item.creationDate),
      authors: this.convertToAuthorDb(item.authors),
      length: item.durationInMin
    };
  }

  private convertToDBItemsUpdate(item: CourseItem) {
    console.log(item);
    return {
      id: item.id,
      name: item.title,
      description: item.description,
      isTopRated: false,
      date: new Date(item.creationDate),
      authors: this.convertToAuthorDb(item.authors),
      length: item.durationInMin
    };
  }
}
