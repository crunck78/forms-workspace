
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { COUNTRY_CODES } from './country-codes';



@Component({
  selector: 'lib-phone-input-question',
  templateUrl: './phone-input-question.component.html',
  styleUrls: ['./phone-input-question.component.scss'],
  providers: [returnProvider(PhoneInputQuestionComponent)]
})
export class PhoneInputQuestionComponent extends Base implements OnInit {


  @Input() placeholder: string = "1234567890";
  readonly COUNTRY_CODES = COUNTRY_CODES;

  constructor(public ngxs: NgxFormsService) {
    super();
    this.input = new FormArray([
      new FormControl('+49'),
      new FormControl('', Validators.pattern(/^-?(0|[1-9]\d*)?$/))
    ]);
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

  /**Value is written already in input field*/
  handleInputPhoneNumber(event: InputEvent) {
    let regexAllowedChars = /^-?(0|[1-9]\d*)?$/;
    let inputField = event.target as HTMLInputElement;
    let inputFieldValue = inputField.value;

    let inputFieldValueAsArray = Array.from(inputFieldValue);

    for (let index = 0; index < inputFieldValueAsArray.length; index++) {
      const character = inputFieldValueAsArray[index];
      if (!regexAllowedChars.test(character)) {
        inputFieldValueAsArray[index] = '';
      }
    }
    inputField.value = inputFieldValueAsArray.join('');
  }

}
