import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { CourseItem } from '../course-item.model';
import { HighlightItemDirective } from '../highlightItem.directive';
import { DurationPipe } from '../../custom-pipes/duration.pipe';
import {RouterTestingModule} from '@angular/router/testing';


@Component({
  templateUrl: './course-item.component.html',
})
class TestHostComponent {
  public courseItem: CourseItem = {
    id: 1,
    title: 'CourseTitle',
    creationDate: new Date(),
    durationInMin: 115,
    description: 'something',
    topRated: true,
    author: 'Pushkin'
  };
  public selectedItem: CourseItem;
  public click(item: CourseItem) { this.selectedItem = item; }
}

describe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  const item: CourseItem;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent, HighlightItemDirective, DurationPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [RouterTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    testHost.courseItem = item;
    expect(testHost).toBeDefined();
  });
});
