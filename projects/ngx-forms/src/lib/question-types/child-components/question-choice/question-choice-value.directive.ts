import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[libQuestionChoiceValue]',
    standalone: false
})
export class QuestionChoiceValueDirective {

  constructor(private el: ElementRef) {}

}
