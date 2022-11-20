import { NgModule } from '@angular/core';
import { NgxFormsComponent } from './ngx-forms.component';
import { NoQuestionComponent } from './no-question/no-question.component';



@NgModule({
  declarations: [
    NgxFormsComponent,
    NoQuestionComponent
  ],
  imports: [
  ],
  exports: [
    NgxFormsComponent,
    NoQuestionComponent
  ]
})
export class NgxFormsModule { }
