import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, OnInit, QueryList, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';
import { NgxFormsDirective } from '../../../ngx-forms.directive';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { QuestionTitleComponent } from '../../child-components/question-title/question-title.component';
import { MatError } from '@angular/material/input';
import { QuestionSubmitterComponent } from '../../child-components/question-submitter/question-submitter.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'lib-single-choice-question',
    templateUrl: './single-choice-question.component.html',
    styleUrls: ['./single-choice-question.component.scss'],
    providers: [returnProvider(SingleChoiceQuestionComponent)],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, MatError, MatCardActions, QuestionSubmitterComponent, AsyncPipe]
})
export class SingleChoiceQuestionComponent extends Base implements AfterContentInit {
  ngxs = inject(NgxFormsService);


  @ContentChildren(forwardRef(() => QuestionChoiceComponent), { descendants: true }) questionChoices!: QueryList<QuestionChoiceComponent>;

  constructor() {
    super();
    this.input = new FormControl('');
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.input);

  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach((qc, index, self) => qc.value$.subscribe(value => {
      if (self.some(qc => qc.firstChoiceSelected && !this.input.touched))
        this.input.markAllAsTouched();
      this.input.setValue(value);
      this.unselectAll();
      qc.color = value ? 'primary' : '';
    }));
  }

  unselectAll() {
    this.questionChoices.forEach(qc => qc.color = '');
  }

}
