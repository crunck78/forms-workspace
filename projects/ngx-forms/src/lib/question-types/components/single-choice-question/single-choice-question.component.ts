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
export class SingleChoiceQuestionComponent implements OnInit, AfterContentInit, Base {

  @ContentChildren(forwardRef(()=> QuestionChoiceComponent), {descendants: true}) questionChoices! : QueryList<QuestionChoiceComponent>;

  id!: number;
  input = new FormControl('');

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.input);

  }

  ngAfterContentInit(): void {
    this.questionChoices.forEach(qc => qc.value$.subscribe(value => {
      this.input.setValue(value);
      this.unselectAll();
      qc.color = value ? 'primary' : '';
    }));
  }

  unselectAll(){
    this.questionChoices.forEach(qc => qc.color = '');
  }

  ngOnInit(): void {
  }

}
