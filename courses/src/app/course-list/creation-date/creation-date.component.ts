import {Component, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  FormControl,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors  } from '@angular/forms';



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
export class CreationDateComponent implements ControlValueAccessor, Validator  {

  public creationDateForm: FormGroup = new FormGroup(    {
      creationDate: new FormControl('', [ Validators.required ])});

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.creationDateForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.creationDateForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.creationDateForm = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.creationDateForm.disable() : this.creationDateForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.creationDateForm.valid ? null : { invalidForm: {valid: false, message: 'creation date field are invalid'}};
  }
}
