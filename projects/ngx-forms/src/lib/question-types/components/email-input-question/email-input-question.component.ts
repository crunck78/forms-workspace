import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-email-input-question',
  templateUrl: './email-input-question.component.html',
  styleUrls: ['./email-input-question.component.scss']
})
export class EmailInputQuestionComponent implements OnInit {

  id!: number;
  input = new FormControl('',[ Validators.email, Validators.required]);
  @Input() placeholder: string  = "example@mail.com";

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();

  }


  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
