import { Component, ContentChildren, forwardRef, OnInit, QueryList } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';

@Component({
  selector: 'lib-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.scss']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @ContentChildren(forwardRef(()=> QuestionChoiceComponent), {descendants: true}) questionChoices! : QueryList<QuestionChoiceComponent>;

  id!: number;
  formArray = new FormArray<FormControl>([]);
  //formControl = new FormControl('');

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.formArray);

  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach((qc, index) => {
      this.formArray.push(new FormControl(''));

      qc.value$.subscribe(value => {
        this.formArray.controls[index].setValue(value);
        qc.color = value ? 'primary' : '';
      });
    });
  }

  ngOnInit(): void {
  }

}
