import { Directive, ElementRef, inject } from '@angular/core';

@Directive({ selector: '[libQuestionChoiceValue]' })
export class QuestionChoiceValueDirective {
  
  private el = inject(ElementRef);

}
