import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { CourseItem } from '../course-item.model';
import { HighlightItemDirective } from '../highlightItem.directive';
import { DurationPipe } from '../../custom-pipes/duration.pipe';
import { RouterTestingModule} from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';


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
    authors: [{id: 'fakeId', name: 'fakeName'}]};
}

describe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent, HighlightItemDirective, DurationPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClientTestingModule]
          }
        }), ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeDefined();
  });
});


