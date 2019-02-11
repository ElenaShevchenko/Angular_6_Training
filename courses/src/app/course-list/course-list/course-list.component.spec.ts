import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseListComponent } from './course-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseService } from '../course.service';
import { OrderByPipe } from '../../custom-pipes/order-by.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { Subscription } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let courseService: Partial <CourseService>;
  let el;

  beforeEach(async(() => {
    courseService = { getCourseList: jasmine.createSpy('getCourseList') };
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        CommonModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [ {provide: CourseService, useValue: courseService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CourseService);
    el = fixture.nativeElement.querySelector('.course-list');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('"loadMore" function should be called if user click "load more"', () => {
    const button = fixture.debugElement.query(By.css('.load-more-button'));
    component.loadMore = jasmine.createSpy('loadMore');
    button.triggerEventHandler('click', null);
    expect(component.loadMore).toHaveBeenCalled();
  });
});
