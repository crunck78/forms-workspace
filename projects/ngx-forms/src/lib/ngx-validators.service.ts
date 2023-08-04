import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

class CustomValidators extends Validators {

  /**
  * Requires at lest one Controls of a FormArray to have a non empty string value
  */
  static requiredOneSelection(formArray: FormArray): ValidationErrors | null {

    const noSelection = (controls: AbstractControl[]) => {
      return !controls.find((control: AbstractControl) => control.value !== null);
    };
    return (noSelection(formArray.controls) ? { noSelection: true } : null);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgxValidatorsService {

  /**
   * To reflect same name as Angular Forms API
   */
  Validators;

  constructor() {
    this.Validators = CustomValidators;
  }
}
