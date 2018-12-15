import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseItem } from '../course-item.model';


describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let courseService: Partial <CourseService>;
  let el;

  beforeEach(async(() => {
    courseService = { getCourseList: jasmine.createSpy('getCourseList') };
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
