import { Component, EventEmitter, forwardRef, Output } from "@angular/core";
import { AbstractControl, FormArray, FormControl } from "@angular/forms";

interface InvalidMessages{
  required?: string;
  email?: string;
  pattern?: string;
  noSelection?: string;
}

@Component({
  template: ''
})
export abstract class Base {
  input!: FormControl | FormArray;
  id!: number;
  invalidMessages!: InvalidMessages;

  @Output() onInputChange = new EventEmitter<AbstractControl>();

  getErrorMessage(input : FormControl | FormArray){
    console.log(input);
    if(input.hasError('required'))
      return this.invalidMessages.required;
    if(input.hasError('email'))
      return this.invalidMessages.email;
    if(input.hasError('pattern'))
      return this.invalidMessages.pattern;
    if(input.hasError('noSelection'))
      return this.invalidMessages.noSelection;
    return;
  }
}
export function returnProvider(component: any) {
  return { provide: Base, useExisting: forwardRef(() => component) };
}