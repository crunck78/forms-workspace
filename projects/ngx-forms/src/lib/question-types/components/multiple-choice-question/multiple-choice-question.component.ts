import { AfterContentInit, Component, ContentChildren, forwardRef, OnInit, QueryList } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';

@Component({
  selector: 'lib-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.scss'],
  providers: [returnProvider(MultipleChoiceQuestionComponent)]
})
export class MultipleChoiceQuestionComponent extends Base implements OnInit, AfterContentInit {

  @ContentChildren(forwardRef(() => QuestionChoiceComponent), { descendants: true }) questionChoices!: QueryList<QuestionChoiceComponent>;

  constructor(public ngxs: NgxFormsService) {
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

  ngOnInit(): void {
  }

}
