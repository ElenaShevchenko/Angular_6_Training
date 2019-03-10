import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationComponent } from './authorization.component';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {appRoutes} from '../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthGuard} from '../auth.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationComponent ],
      imports: [ FormsModule,
                  HttpClientTestingModule,
                 RouterTestingModule ],
      providers: [AuthGuard]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
