import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseComponent } from './edit-course.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
