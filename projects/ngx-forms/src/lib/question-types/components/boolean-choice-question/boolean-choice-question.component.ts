import { AfterContentInit, AfterViewInit, Component, ContentChildren, forwardRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';

@Component({
  selector: 'lib-boolean-choice-question',
  templateUrl: './boolean-choice-question.component.html',
  styleUrls: ['./boolean-choice-question.component.scss']
})
export class BooleanChoiceQuestionComponent implements OnInit, AfterViewInit {

  @ViewChildren(QuestionChoiceComponent) questionChoices!: QueryList<QuestionChoiceComponent>;

  id!: number;
  formControl = new FormControl('');

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.formControl);
  }

  ngAfterViewInit(): void {
    console.log('QuestionChoiceComponent', this.questionChoices);
    this.questionChoices.forEach(qc => qc.value$.subscribe(value => {
      this.formControl.setValue(value);
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
