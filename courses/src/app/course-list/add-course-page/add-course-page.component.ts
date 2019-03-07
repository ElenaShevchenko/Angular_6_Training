import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app-store';
import { CreateCourse } from '../course.effects';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  public createCourseForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    creationDate: new FormControl(),
    duration: new FormControl(),
    authors: new FormControl()
  });

  public get title() { return this.createCourseForm.get('title'); }
  public get description() { return this.createCourseForm.get('description'); }
  public get creationDate() { return this.createCourseForm.get('creationDate'); }
  public get duration() { return this.createCourseForm.get('duration'); }
  public get authors() { return this.createCourseForm.get('authors'); }

  constructor(
    private courseService: CourseService,
    private router: Router,
    private store$: Store<AppStore>,
    private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.createCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      creationDate: [''],
      duration: [' '],
      authors: ['']
    });
  }

  public save() {
    this.store$.dispatch(new CreateCourse({ course: this.createCourseForm.value }));
    this.router.navigate(['/courses']);
  }
}
