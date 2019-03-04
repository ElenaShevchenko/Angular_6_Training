import {Component } from '@angular/core';
import { NewCourseModel } from '../new-course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {AppStore} from '../../app-store';
import { CreateCourse } from '../course.effects';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent {

  constructor(
    private courseService: CourseService,
    private router: Router,
    private store$: Store<AppStore>,
    private formBuilder: FormBuilder ) {

    this.createForm();
  }

  createCourseForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    creationDate: new FormControl(),
    duration: new FormControl(),
    author: new FormControl()
  });

  createForm() {
    this.createCourseForm = this.formBuilder.group({
      title: ['' , [Validators.required, Validators.maxLength(50)]],
      description: ['',  [Validators.required, Validators.maxLength(500)]],
      creationDate: [''],
      duration: [''],
      author: ['']
    });
  }

  get title() { return this.createCourseForm.get('title'); }
  get description() { return this.createCourseForm.get('description'); }


  save() {
    this.store$.dispatch(new CreateCourse({ course: this.createCourseForm.value }));
    this.router.navigate(['/courses']);
  }
}
