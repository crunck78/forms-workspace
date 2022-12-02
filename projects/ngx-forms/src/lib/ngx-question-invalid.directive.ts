import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Base } from './ngx-question.model';

@Directive({
  selector: '[libNgxQuestionInvalid]'
})
export class NgxQuestionInvalidDirective implements OnChanges {

  @Input() libNgxQuestionInvalid!: any;

  constructor(private comp: Base) {
    console.log(this.comp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
