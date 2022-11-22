import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsService {

  static counter = 0;

  currentSection: number = 0;

  sections: any[] = [];

  constructor() {}

  appendSection(){
    NgxFormsService.counter++;
    this.sections.push(NgxFormsService.counter);
    console.log(this.sections);
  }
}
