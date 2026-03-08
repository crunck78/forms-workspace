import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, OnDestroy, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { QuestionChoiceComponent } from '../../child-components/question-choice/question-choice.component';
import { NgxFormsDirective } from '../../../ngx-forms.directive';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { QuestionTitleComponent } from '../../child-components/question-title/question-title.component';
import { QuestionChoiceValueDirective } from '../../child-components/question-choice/question-choice-value.directive';
import { QuestionSubmitterComponent } from '../../child-components/question-submitter/question-submitter.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'lib-boolean-choice-question',
    templateUrl: './boolean-choice-question.component.html',
    styleUrls: ['./boolean-choice-question.component.scss'],
    imports: [NgxFormsDirective, MatCard, MatCardTitle, QuestionTitleComponent, MatCardContent, QuestionChoiceComponent, QuestionChoiceValueDirective, MatCardActions, QuestionSubmitterComponent, AsyncPipe]
})
export class BooleanChoiceQuestionComponent implements AfterViewInit {
  ngxs = inject(NgxFormsService);


  private questionChoicesPlaceholder!: QueryList<QuestionChoiceComponent>;

  @ViewChildren(QuestionChoiceComponent, {emitDistinctChangesOnly: true}) set content(content: QueryList<QuestionChoiceComponent>) {
    if (content) { // initially setter gets called with undefined
      this.questionChoicesPlaceholder = content;
    }
  }

  id!: number;
  formControl = new FormControl('');
  initialized = false;

  constructor() {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.formControl);
    //console.log('Boolean Choice');
  }

  ngAfterViewInit(): void {
    this.ngxs.currentSection$.subscribe((currentSection) => {
      //console.log(currentSection, this.initialized);
      if (currentSection == this.id && !this.initialized) {
        //console.log('reached boolean choice', this.id);
        //console.log(this.questionChoicesPlaceholder);
        this.initialized = true;
        setTimeout(()=>{
          this.questionChoicesPlaceholder.forEach((qc) => {
            //console.log(qc);
            qc.value$.subscribe((value) => {
              //console.log('Value change: ', value);
              this.formControl.setValue(value);
              this.unselectAll();
              qc.color = value ? 'primary' : '';
            })
          });
        }, 0)
      }
    });

  }

  unselectAll() {
    this.questionChoicesPlaceholder.forEach(qc => qc.color = '');
  }

}
