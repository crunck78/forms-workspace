import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, OnInit, QueryList } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';

@Component({
  selector: 'lib-single-choice-question',
  templateUrl: './single-choice-question.component.html',
  styleUrls: ['./single-choice-question.component.scss']
})
export class SingleChoiceQuestionComponent implements OnInit, AfterContentInit {

  @ContentChildren(forwardRef(()=> QuestionChoiceComponent), {descendants: true}) questionChoices! : QueryList<QuestionChoiceComponent>;

  id!: number;
  //formArray = new FormArray<FormControl>([]);
  formControl = new FormControl('');

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.formControl);

  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach(qc => qc.value$.subscribe(value => {
      this.formControl.setValue(value);
      this.unselectAll();
      qc.color = 'primary';
    }));
  }

  unselectAll(){
    this.questionChoices.forEach(qc => qc.color = '');
  }

  ngOnInit(): void {
  }

}
