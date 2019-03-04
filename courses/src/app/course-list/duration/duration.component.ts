import {Component, forwardRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validator,
  Validators
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

  public durationForm: FormGroup = new FormGroup(    {
    durationInMin: new FormControl('', [ Validators.required ])});

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.durationForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.durationForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.durationForm = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.durationForm.disable() : this.durationForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.durationForm.valid ? null : { invalidForm: {valid: false, message: 'durationForm field are invalid'}};
  }
}
