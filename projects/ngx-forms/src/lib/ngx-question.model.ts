import { forwardRef } from "@angular/core";
import { FormArray, FormControl } from "@angular/forms";

export abstract class Base {
  input!: FormControl | FormArray;
  id!: number;
}
export function returnProvider(component: any) {
return { provide: Base, useExisting: forwardRef(() => component) };
}