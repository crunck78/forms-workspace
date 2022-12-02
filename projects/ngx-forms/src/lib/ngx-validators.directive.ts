import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Base } from './ngx-question.model';
import { MultipleChoiceQuestionComponent } from './question-types/components/multiple-choice-question/multiple-choice-question.component';


@Directive({
  selector: '[libNgxValidators]'
})
export class NgxValidatorsDirective implements OnChanges {

  @Input() libNgxValidators!: any[];

  constructor(private comp: Base) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.comp.input instanceof FormArray && !(this.comp instanceof MultipleChoiceQuestionComponent))
      this.libNgxValidators.forEach((validators, index) => (this.comp.input as FormArray).controls[index].addValidators(validators))
    else
      this.comp.input.addValidators(this.libNgxValidators);
  }
}
