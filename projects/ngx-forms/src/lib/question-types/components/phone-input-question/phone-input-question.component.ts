
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectChange, MatSelect, MatOption } from '@angular/material/select';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { COUNTRY_CODES } from './country-codes';
import { NgxFormsDirective } from '../../../ngx-forms.directive';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { QuestionTitleComponent } from '../../child-components/question-title/question-title.component';
import { MatFormField, MatLabel, MatInput, MatError } from '@angular/material/input';
import { QuestionSubmitterComponent } from '../../child-components/question-submitter/question-submitter.component';
import { AsyncPipe } from '@angular/common';



@Component({
    selector: 'lib-phone-input-question',
    templateUrl: './phone-input-question.component.html',
    styleUrls: ['./phone-input-question.component.scss'],
    providers: [returnProvider(PhoneInputQuestionComponent)],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, MatFormField, MatLabel, MatSelect, FormsModule, ReactiveFormsModule, MatOption, MatInput, MatError, MatCardActions, QuestionSubmitterComponent, AsyncPipe]
})
export class PhoneInputQuestionComponent extends Base implements OnInit {
  ngxs = inject(NgxFormsService);



  @Input() placeholder: string = "1234567890";
  readonly COUNTRY_CODES = COUNTRY_CODES;

  constructor() {
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
