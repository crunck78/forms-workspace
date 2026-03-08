import { AfterContentInit, Component, ContentChildren, forwardRef, OnInit, QueryList, inject } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
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
    selector: 'lib-multiple-choice-question',
    templateUrl: './multiple-choice-question.component.html',
    styleUrls: ['./multiple-choice-question.component.scss'],
    providers: [returnProvider(MultipleChoiceQuestionComponent)],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, MatError, MatCardActions, QuestionSubmitterComponent, AsyncPipe]
})
export class MultipleChoiceQuestionComponent extends Base implements AfterContentInit {
  ngxs = inject(NgxFormsService);


  @ContentChildren(forwardRef(() => QuestionChoiceComponent), { descendants: true }) questionChoices!: QueryList<QuestionChoiceComponent>;

  constructor() {
    super();
    this.input = new FormArray<FormControl>([]);
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.input);
  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach((qc, index, self) => {
      (this.input as FormArray).push(new FormControl(''));

      qc.value$.subscribe(value => {
        if (self.some(qc => qc.firstChoiceSelected && !this.input.touched))
          this.input.markAllAsTouched();
        (this.input as FormArray).controls[index].setValue(value);
        qc.color = value ? 'primary' : '';
      });
    });
  }

}
