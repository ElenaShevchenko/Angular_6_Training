import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS, NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { Author, CourseItem } from '../course-item.model';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription} from 'rxjs';
import { AppStore } from '../../app-store';
import { GetAuthors } from '../course.actions';
import { isArray } from 'util';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

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


export class AuthorComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  public invalidMessage: string;
  constructor(
    private store$: Store<AppStore>,
    public translate: TranslateService
  ) {
  }
  public authors$: Observable<Author[]> = this.store$.pipe(select((state) => {
    return state.courseList.authors; }));

  private selectedItems = [];
  private dropdownSettings = {};
  translationSubscription: Subscription;


  private propagateChange = (_: any) => { };


  public writeValue(val: CourseItem[]) {
    if (val) {
      this.selectedItems = val;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) { }

  public validate(c: AbstractControl): ValidationErrors | null {
    return (this.selectedItems !== null && isArray(this.selectedItems) && this.selectedItems.length)
      ? null : { invalidForm: { valid: false, message:  this.invalidMessage } };
  }

  ngOnInit() {
    this.store$.dispatch(new GetAuthors());
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.translateMes();
    this.translationSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateMes();
    });
  }

  onItemSelect(val: CourseItem) {
    this.propagateChange(this.selectedItems);
  }

  onDeSelect(val: CourseItem) {
    if (val) {
      this.selectedItems.forEach((item, index, array) => {
        if (item.id === val.id) {
          return array.splice(index, 1);
        }
      });
    }
    this.propagateChange(this.selectedItems);
  }

  onSelectAll(items: CourseItem[]) {
    if (items && items.length) {
      this.selectedItems = items;
      this.propagateChange(this.selectedItems);
    }
  }

  onDeSelectAll () {
    this.selectedItems = [];
    this.propagateChange(this.selectedItems);
  }

  public translateMes () {
    const translation = (
      this.translate.get(['AUTHORS', 'FIELD_ARE_INVALID'])
    );
    translation.subscribe((res: {'AUTHORS': string, 'FIELD_ARE_INVALID': string} ) => {
      this.invalidMessage = res.AUTHORS + ' ' + res.FIELD_ARE_INVALID;
    });
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}

