import { Component, ComponentRef, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, Validator, Validators } from '@angular/forms';
import { Base } from './ngx-question.model';

@Directive({
  selector: '[libNgxValidators]'
})
export class NgxValidatorsDirective implements OnChanges {

  @Input() libNgxValidators!: any[];

  constructor(private comp: Base) {
    console.log(comp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.comp.input instanceof FormArray)
      this.libNgxValidators.forEach((validators, index) => (this.comp.input as FormArray).controls[index].addValidators(validators))
    else
      this.comp.input.addValidators(this.libNgxValidators);
  }
}
