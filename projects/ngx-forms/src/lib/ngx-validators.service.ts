import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

class CustomValidators extends Validators {

  /**
   * Requires at lest one Controls of a FormArray to have a non empty string value
   */
  static requiredOneSelection(): ValidatorFn {
    return (formArray: AbstractControl): ValidationErrors | null => {

      const noSelection = (controls: any) => {
        return !controls.find((control: any) => control.value !== '');
      };

      return noSelection((formArray as FormArray)['controls']) ? { noSelection: true } as ValidationErrors : null;
    };
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
