import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { CourseItem } from '../course-item.model';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let itemDe;
  let expectedItem: CourseItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    itemDe  = fixture.debugElement.query(By.css('.remove-button'));
    expectedItem = {
      id: 1,
      title: 'Course Title',
      creationDate: new Date(),
      durationInMin: 115,
      description: 'something',
    };
  });

  it('should create', () => {
    component.courseItem = expectedItem;
    expect(component).toBeDefined();
  });

  it('should raise clickButton event when clicked (triggerEventHandler)', () => {
    let selectedCourse: CourseItem;
    component.clickButton.subscribe((item: CourseItem) => selectedCourse = item);

    itemDe.removeCourse();
    expect(selectedCourse).toBe(expectedItem);
  });
});
