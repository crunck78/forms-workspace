import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { NgxFormsDirective } from '../../../ngx-forms.directive';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { QuestionTitleComponent } from '../../child-components/question-title/question-title.component';
import { QuestionSubmitterComponent } from '../../child-components/question-submitter/question-submitter.component';

@Component({
    selector: 'lib-no-question',
    templateUrl: './no-question.component.html',
    styleUrls: ['./no-question.component.scss'],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, MatCardActions, QuestionSubmitterComponent]
})
export class NoQuestionComponent implements OnInit {
  ngxs = inject(NgxFormsService);


  id!: number;
  input = new FormControl('');

  ngOnInit(): void {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.input);
  }


}
