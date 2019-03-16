import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppStore} from '../../app-store';
import {TranslateService} from '@ngx-translate/core';

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
export class CreationDateComponent implements ControlValueAccessor, Validator {
  public value: string;
  public invalidMessage: string;

  constructor(
    translate: TranslateService
  ) {
    translate.get('CREATION_DATA').subscribe((res1: string) => {
      translate.get('FIELD_ARE_INVALID').subscribe((res2: string) => {
        this.invalidMessage = res1 + ' ' + res2;
      });
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
}
