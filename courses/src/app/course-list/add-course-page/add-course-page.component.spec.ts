import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursePageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
