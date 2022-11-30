
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { NgxFormsService } from '../../../ngx-forms.service';
import { COUNTRY_CODES } from './country-codes';



@Component({
  selector: 'lib-phone-input-question',
  templateUrl: './phone-input-question.component.html',
  styleUrls: ['./phone-input-question.component.scss']
})
export class PhoneInputQuestionComponent implements OnInit {

  id!: number;
  input = new FormControl('');
  dialCode!: string;
  readonly COUNTRY_CODES = COUNTRY_CODES;

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();

  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

  onCountryChange(event : MatSelectChange){

  }

}
