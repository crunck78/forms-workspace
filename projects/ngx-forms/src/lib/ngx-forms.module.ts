import { NgModule } from '@angular/core';
import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './no-question/no-question.component';
import { TextQuestionComponent } from './text-question/text-question.component';


@NgModule({
  declarations: [
    NgxFormsComponent,
    NoQuestionComponent,
    TextQuestionComponent
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
