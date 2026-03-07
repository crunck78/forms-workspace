import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ngxForms',
    standalone: false
})
export class NgxFormsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
