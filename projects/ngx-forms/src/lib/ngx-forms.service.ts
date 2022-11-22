import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsService {

  private static counter = 0;

  currentSection: number = 1;
  currentSection$ = new BehaviorSubject(1);
  sections: any[] = [];

  constructor() {
    this.currentSection$.subscribe((currentSection)=>{
      console.log(currentSection);
    });
  }

  appendSection(){
    this.sections.push(++NgxFormsService.counter);
    return NgxFormsService.counter;
  }

  previous(){
    this.currentSection$.next(--this.currentSection);
  }

  next(){
    this.currentSection$.next(++this.currentSection);
  }
}
