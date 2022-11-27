import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input, NgModule } from '@angular/core';
import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './question-types/components/no-question/no-question.component';
import { TextQuestionComponent } from './question-types/components/text-question/text-question.component';
import { InputQuestionComponent } from './question-types/components/input-question/input-question.component';
import { PtsDirective } from './pts.directive';
import { QuestionHeaderComponent } from './question-types/child-components/question-header/question-header.component';
import { QuestionFooterComponent } from './question-types/child-components/question-footer/question-footer.component';
import { QuestionTitleComponent } from './question-types/child-components/question-title/question-title.component';
import { QuestionSubmitterComponent } from './question-types/child-components/question-submitter/question-submitter.component';
import { NgxFormNavComponent } from './ngx-form-nav/ngx-form-nav.component';
import { NgxFormHeaderComponent } from './ngx-form-header/ngx-form-header.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgxFormsDirective } from './ngx-forms.directive';
import { NgxFormsPipe } from './ngx-forms.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleChoiceQuestionComponent } from './question-types/components/single-choice-question/single-choice-question.component';
import { QuestionChoiceComponent } from './question-types/child-components/question-choice/question-choice.component';
import { SingleChoiceQuestionDirective } from './question-types/components/single-choice-question/single-choice-question.directive';
import { QuestionChoiceValueDirective } from './question-types/child-components/question-choice/question-choice-value.directive';
import { MultipleChoiceQuestionComponent } from './question-types/components/multiple-choice-question/multiple-choice-question.component';



@NgModule({
  declarations: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent,
    InputQuestionComponent,
    PtsDirective,
    QuestionHeaderComponent,
    QuestionFooterComponent,
    QuestionTitleComponent,
    QuestionSubmitterComponent,
    NgxFormNavComponent,
    NgxFormHeaderComponent,
    NgxFormsDirective,
    NgxFormsPipe,
    SingleChoiceQuestionComponent,
    QuestionChoiceComponent,
    SingleChoiceQuestionDirective,
    QuestionChoiceValueDirective,
    MultipleChoiceQuestionComponent,

  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent,
    InputQuestionComponent,
    SingleChoiceQuestionComponent,
    QuestionChoiceComponent,
    QuestionChoiceValueDirective,
    MultipleChoiceQuestionComponent
  ]
})
export class NgxFormsModule { }
