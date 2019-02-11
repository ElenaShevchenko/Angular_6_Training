import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDateComponent } from './creation-date.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {DurationPipe} from '../../custom-pipes/duration.pipe';

describe('CreationDateComponent', () => {
  let component: CreationDateComponent;
  let fixture: ComponentFixture<CreationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ FormsModule,
        RouterTestingModule ],
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
