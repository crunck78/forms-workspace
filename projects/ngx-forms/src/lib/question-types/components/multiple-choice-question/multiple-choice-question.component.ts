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
export class MultipleChoiceQuestionComponent implements OnInit, AfterContentInit, Base {

  @ContentChildren(forwardRef(()=> QuestionChoiceComponent), {descendants: true}) questionChoices! : QueryList<QuestionChoiceComponent>;

  id!: number;
  input = new FormArray<FormControl>([]);

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.input);

  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach((qc, index) => {
      this.input.push(new FormControl(''));

      qc.value$.subscribe(value => {
        this.input.controls[index].setValue(value);
        qc.color = value ? 'primary' : '';
      });
    });
  }

  ngOnInit(): void {
  }

}
