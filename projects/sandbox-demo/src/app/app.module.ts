import { NgModule } from '@angular/core';

import { NoQuestionComponent, NgxFormsComponent, BooleanChoiceQuestionComponent, PhoneInputQuestionComponent, NgxQuestionInvalidDirective, QuestionChoiceComponent, NgxValidatorsDirective, TextQuestionComponent, InputQuestionComponent, EmailInputQuestionComponent } from 'ngx-forms';

@NgModule({
    providers: [],
    imports: [
        NgxFormsComponent,
        NoQuestionComponent,
        BooleanChoiceQuestionComponent,
        PhoneInputQuestionComponent,
        QuestionChoiceComponent,
        NgxQuestionInvalidDirective,
        NgxValidatorsDirective,
        TextQuestionComponent,
        InputQuestionComponent,
        EmailInputQuestionComponent
    ],
    exports: [NgxFormsComponent, NoQuestionComponent, BooleanChoiceQuestionComponent, PhoneInputQuestionComponent, QuestionChoiceComponent, NgxQuestionInvalidDirective, NgxValidatorsDirective, TextQuestionComponent, InputQuestionComponent, EmailInputQuestionComponent]
})
export class AppModule { }
