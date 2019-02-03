import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDateComponent } from './creation-date.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CreationDateComponent', () => {
  let component: CreationDateComponent;
  let fixture: ComponentFixture<CreationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
