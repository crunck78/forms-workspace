import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { NgxFormsDirective } from '../../../ngx-forms.directive';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { QuestionTitleComponent } from '../../child-components/question-title/question-title.component';
import { MatFormField, MatLabel, MatInput, MatError } from '@angular/material/input';
import { QuestionSubmitterComponent } from '../../child-components/question-submitter/question-submitter.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'lib-email-input-question',
    templateUrl: './email-input-question.component.html',
    styleUrls: ['./email-input-question.component.scss'],
    providers: [returnProvider(EmailInputQuestionComponent)],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatError, MatCardActions, QuestionSubmitterComponent, AsyncPipe]
})
export class EmailInputQuestionComponent extends Base implements OnInit {
  ngxs = inject(NgxFormsService);



  @Input() placeholder: string  = "example@mail.com";

  constructor() {
    super();
    this.input = new FormControl('');
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
