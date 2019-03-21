import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {merge, Subscription} from 'rxjs';
import {mergeAll} from 'rxjs/operators';

@Component({
  selector: 'app-creation-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreationDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CreationDateComponent),
      multi: true
    }
  ]
})
export class CreationDateComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  public value: string;
  public invalidMessage: string;
  translationSubscription: Subscription;

  constructor(
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.translateMes();
    this.translationSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateMes();
    });
  }

  private propagateChange = (_: any) => { };

  public onChange(val: string) {
    if (val) {
      this.value = val;
    } else {
      this.value = null;
    }
    this.propagateChange(this.value);
  }

  public writeValue(val: string) {
    if (val) {
      this.value = val;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) { }

  public validate(c: AbstractControl): ValidationErrors | null {
    const d = new Date(this.value);
    return (this.value !== null && d instanceof Date && !isNaN(d.getTime()))
      ? null : { invalidForm: { valid: false, message: this.invalidMessage } };
  }

  public translateMes () {
    const translation = (
      this.translate.get(['CREATION_DATA', 'FIELD_ARE_INVALID'])
    );
    translation.subscribe((res: {'CREATION_DATA': string, 'FIELD_ARE_INVALID': string} ) => {
      this.invalidMessage = res.CREATION_DATA + ' ' + res.FIELD_ARE_INVALID;
    });
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}
