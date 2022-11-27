import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libQuestionChoiceValue]'
})
export class QuestionChoiceValueDirective {

  constructor(private el: ElementRef) {}

}
