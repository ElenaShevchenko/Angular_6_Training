import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  SelectMultipleControlValueAccessor,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import { AuthorDb } from '../course-item.model';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppStore } from '../../app-store';
import { GetAuthors } from '../course.effects';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    }
  ]
})


export class AuthorComponent implements OnInit, ControlValueAccessor {
  constructor(
    private store$: Store<AppStore>
  ) {
  }
  public authors$: Observable<AuthorDb[]> = this.store$.pipe(select((state) => state.authors));

  public authorsForm: FormGroup = new FormGroup(    {
    authorControl: new FormControl('', [ Validators.required ])});

  ngOnInit() {
    this.store$.dispatch(new GetAuthors());
  }
  writeValue(val: any): void {
    if (val) {
      this.authorsForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.authorsForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.authorsForm = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.authorsForm.disable() : this.authorsForm.enable();
  }
}

