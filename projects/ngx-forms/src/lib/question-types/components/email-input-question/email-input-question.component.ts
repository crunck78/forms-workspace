import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';

@Component({
  selector: 'lib-email-input-question',
  templateUrl: './email-input-question.component.html',
  styleUrls: ['./email-input-question.component.scss'],
  providers: [returnProvider(EmailInputQuestionComponent)]
})
export class EmailInputQuestionComponent extends Base implements OnInit {


  @Input() placeholder: string  = "example@mail.com";

  constructor(public ngxs: NgxFormsService) {
    super();
    this.input = new FormControl('');
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
