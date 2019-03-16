import { Component, OnInit } from '@angular/core';
import { CourseItem, RouteParamModel } from '../course-item.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app-store';
import { UpdateCourse } from '../course.actions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  public courseItem: CourseItem;
  public routeParams: RouteParamModel = {};
  public editCourseForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    creationDate: new FormControl(),
    durationInMin: new FormControl(),
    authors: new FormControl()
  });

  private formatDate(str) {
    const date = new Date(str);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return [ date.getFullYear(), month, day].join('-');
  }

  public get title() { return this.editCourseForm.get('title'); }
  public get description() { return this.editCourseForm.get('description'); }
  public get creationDate() { return this.editCourseForm.get('creationDate'); }
  public get durationInMin() { return this.editCourseForm.get('durationInMin'); }
  public get authors() { return this.editCourseForm.get('authors'); }

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store<AppStore>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data.id;
    });
    this.courseService.getCourseById(this.routeParams.id).subscribe((res: CourseItem) => {
        this.courseItem = res;
        this.createForm(this.courseItem);
      });
  }

  private createForm(item) {
    this.editCourseForm = this.formBuilder.group({
      title: [item.title, [Validators.required, Validators.maxLength(50)]],
      description: [item.description, [Validators.required, Validators.maxLength(500)]],
      creationDate: [this.formatDate(item.creationDate)],
      durationInMin: [item.durationInMin],
      authors: [item.authors]
    });
  }

  save() {
    this.editCourseForm.value.id = this.courseItem.id;
    this.store$.dispatch(new UpdateCourse({ course: this.editCourseForm.value }));
    this.router.navigate(['/courses']);
  }

}
