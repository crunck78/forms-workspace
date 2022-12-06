import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, OnInit, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';

@Component({
  selector: 'lib-single-choice-question',
  templateUrl: './single-choice-question.component.html',
  styleUrls: ['./single-choice-question.component.scss'],
  providers: [returnProvider(SingleChoiceQuestionComponent)]
})
export class SingleChoiceQuestionComponent extends Base implements OnInit, AfterContentInit {

  @ContentChildren(forwardRef(() => QuestionChoiceComponent), { descendants: true }) questionChoices!: QueryList<QuestionChoiceComponent>;

  constructor(public ngxs: NgxFormsService) {
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

  ngOnInit(): void {
  }

}
