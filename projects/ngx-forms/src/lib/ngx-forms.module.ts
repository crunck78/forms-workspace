import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PtsDirective } from './pts.directive';

import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './question-types/components/no-question/no-question.component';
import { TextQuestionComponent } from './question-types/components/text-question/text-question.component';
import { InputQuestionComponent } from './question-types/components/input-question/input-question.component';

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
import {MatSelectModule} from '@angular/material/select';

import { NgxFormsDirective } from './ngx-forms.directive';
import { NgxFormsPipe } from './ngx-forms.pipe';

import { SingleChoiceQuestionComponent } from './question-types/components/single-choice-question/single-choice-question.component';
import { QuestionChoiceComponent } from './question-types/child-components/question-choice/question-choice.component';
import { SingleChoiceQuestionDirective } from './question-types/components/single-choice-question/single-choice-question.directive';
import { QuestionChoiceValueDirective } from './question-types/child-components/question-choice/question-choice-value.directive';
import { MultipleChoiceQuestionComponent } from './question-types/components/multiple-choice-question/multiple-choice-question.component';
import { BooleanChoiceQuestionComponent } from './question-types/components/boolean-choice-question/boolean-choice-question.component';
import { PhoneInputQuestionComponent } from './question-types/components/phone-input-question/phone-input-question.component';
import { EmailInputQuestionComponent } from './question-types/components/email-input-question/email-input-question.component';
import { NgxValidatorsDirective } from './ngx-validators.directive';
import { NgxQuestionInvalidDirective } from './ngx-question-invalid.directive';

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
    BooleanChoiceQuestionComponent,
    PhoneInputQuestionComponent,
    EmailInputQuestionComponent,
    NgxValidatorsDirective,
    NgxQuestionInvalidDirective,

  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent,
    InputQuestionComponent,
    SingleChoiceQuestionComponent,
    QuestionChoiceComponent,
    QuestionChoiceValueDirective,
    MultipleChoiceQuestionComponent,
    BooleanChoiceQuestionComponent,
    PhoneInputQuestionComponent,
    EmailInputQuestionComponent,
    NgxValidatorsDirective,
    NgxQuestionInvalidDirective
  ]
})
export class NgxFormsModule { }
