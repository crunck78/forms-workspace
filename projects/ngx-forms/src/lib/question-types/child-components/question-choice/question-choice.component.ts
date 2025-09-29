import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { QuestionChoiceValueDirective } from './question-choice-value.directive';

@Component({
  selector: 'lib-question-choice',
  templateUrl: './question-choice.component.html',
  styleUrls: ['./question-choice.component.scss']
})
export class QuestionChoiceComponent implements AfterContentInit {

  value$ = new BehaviorSubject<string>('');
  //value$ = new Observable<string>();
  value! : string;
  color! : string;
  firstChoiceSelected = false;

  @ContentChild(forwardRef(()=> QuestionChoiceValueDirective) , {descendants: true}) valueDirective! : any;

  ngAfterContentInit(): void {
    this.value = this.valueDirective.el.nativeElement.innerText;
    // this.value$.next(this.value);
  }

  select(){
    if(!this.firstChoiceSelected)
      this.firstChoiceSelected = true;
    if(this.color == 'primary')
      this.value$.next('');
    else
      this.value$.next(this.value);
    //this.color = 'primary';
  }

}
