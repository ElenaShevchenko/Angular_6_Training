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
import {GetAuthors} from '../course.actions';

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

export class DurationComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy  {
  public value: string;
  private isShown = false;
  public invalidMessage: string;
  translationSubscription: Subscription;

  constructor(
    public translate: TranslateService
  ) {
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

  ngOnInit() {
    this.translateMes();
    this.translationSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateMes();
    });
  }
  public translateMes () {
    const translation = (
      this.translate.get(['DURATION', 'FIELD_ARE_INVALID'])
    );
    translation.subscribe((res: {'DURATION': string, 'FIELD_ARE_INVALID': string} ) => {
      this.invalidMessage = res.DURATION + ' ' + res.FIELD_ARE_INVALID;
    });
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}
