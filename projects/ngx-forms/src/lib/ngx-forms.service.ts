import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsService {

  private static counter = 0;

  currentSection: number = 1;
  currentSection$ = new BehaviorSubject(1);
  sections: any[] = [];

  formArray!: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.currentSection$.subscribe((currentSection) => {
      //console.log(currentSection);
    });

    this.formArray = this.formBuilder.array([]);
    this.formArray.valueChanges.subscribe(values => console.log(values));
  }

  appendSection() {
    this.sections.push(++NgxFormsService.counter);
    return NgxFormsService.counter;
  }

  previous() {
    this.currentSection$.next(--this.currentSection);
  }

  next() {
    this.currentSection$.next(++this.currentSection);
  }

  appendControl(control: FormControl | FormArray) {
    this.formArray.push(control);
  }

  getErrorMessage(inputControl: FormArray | FormControl) {
    return 'Invalid';
  }
}
