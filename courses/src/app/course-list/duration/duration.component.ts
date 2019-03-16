import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})

export class DurationComponent implements ControlValueAccessor, Validator  {
  public value: string;
  private isShown = false;
  public invalidMessage: string;

  constructor(
    translate: TranslateService
  ) {
    translate.get('DURATION').subscribe((res1: string) => {
      translate.get('FIELD_ARE_INVALID').subscribe((res2: string) => {
        this.invalidMessage = res1 + ' ' + res2;
      });
    });
  }

  private propagateChange = (_: any) => { };

  private isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  public onChange(val: string) {
    if (val) {
      this.isShown = true;
      this.value = val;
    } else {
      this.isShown = false;
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
    const d = this.value;
    return (this.value !== null && this.isNumeric(this.value))
      ? null : { invalidForm: { valid: false, message: this.invalidMessage } };
  }
}
