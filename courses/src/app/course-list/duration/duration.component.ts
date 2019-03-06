import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

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
  private propagateChange = (_: any) => { };

  public onChange(val: string) {
    if (val) {
      this.value = val;
    } else {
      this.value = null;
    }
    this.propagateChange(this.value);
  }

  public writeValue(val: any) {
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
    return (this.value !== null)
      ? null : { invalidForm: { valid: false, message: 'duration field is invalid' } };
  }
}
