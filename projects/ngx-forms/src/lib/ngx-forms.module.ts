import { NgModule } from '@angular/core';
import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './no-question/no-question.component';
import { TextQuestionComponent } from './text-question/text-question.component';
import { PtsDirective } from './pts.directive';
import { QuestionHeaderComponent } from './question-header/question-header.component';
import { QuestionFooterComponent } from './question-footer/question-footer.component';
import { QuestionTitleComponent } from './question-title/question-title.component';
import { QuestionSubmitterComponent } from './question-submitter/question-submitter.component';
import { NgxFormNavComponent } from './ngx-form-nav/ngx-form-nav.component';
import { NgxFormHeaderComponent } from './ngx-form-header/ngx-form-header.component';


@NgModule({
  declarations: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent,
    PtsDirective,
    QuestionHeaderComponent,
    QuestionFooterComponent,
    QuestionTitleComponent,
    QuestionSubmitterComponent,
    NgxFormNavComponent,
    NgxFormHeaderComponent
  ],
  imports: [
  ],
  exports: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent
  ]
})
export class NgxFormsModule { }
