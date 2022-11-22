import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgxFormsDirective } from './ngx-forms.directive';
import { NgxFormsPipe } from './ngx-forms.pipe';


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
    NgxFormHeaderComponent,
    NgxFormsDirective,
    NgxFormsPipe
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    CommonModule,
    FormsModule
  ],
  exports: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent
  ]
})
export class NgxFormsModule { }
