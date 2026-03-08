import { Directive, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Base } from './ngx-question.model';

@Directive({ selector: '[libNgxQuestionInvalid]' })
export class NgxQuestionInvalidDirective implements OnChanges {
  private comp = inject(Base);


  @Input() libNgxQuestionInvalid!: any;

  constructor() {
    console.log(this.comp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.comp.invalidMessages = changes['libNgxQuestionInvalid'].currentValue;
  }

}
