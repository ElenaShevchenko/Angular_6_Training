import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDateComponent } from './creation-date.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreationDateComponent', () => {
  let component: CreationDateComponent;
  let fixture: ComponentFixture<CreationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [  FormsModule,
                  ReactiveFormsModule,
                  RouterTestingModule,
                  TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClientTestingModule]
          }
        }), ],
      providers: [HttpClientTestingModule]
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
