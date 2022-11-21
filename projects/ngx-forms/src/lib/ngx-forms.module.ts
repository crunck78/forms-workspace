import { NgModule } from '@angular/core';
import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './no-question/no-question.component';
import { TextQuestionComponent } from './text-question/text-question.component';
import { PtsDirective } from './pts.directive';


@NgModule({
  declarations: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent,
    PtsDirective
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
