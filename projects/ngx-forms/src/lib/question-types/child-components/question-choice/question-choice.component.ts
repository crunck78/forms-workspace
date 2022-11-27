import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, forwardRef, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionChoiceValueDirective } from './question-choice-value.directive';

@Component({
  selector: 'lib-question-choice',
  templateUrl: './question-choice.component.html',
  styleUrls: ['./question-choice.component.scss']
})
export class QuestionChoiceComponent implements OnInit, AfterContentInit {

  value$ = new BehaviorSubject<string>('');
  value! : string;
  color! : string;

  @ContentChild(forwardRef(()=> QuestionChoiceValueDirective) , {descendants: true}) valueDirective! : any;
  constructor() {
  }

  ngAfterContentInit(): void {
    this.value = this.valueDirective.el.nativeElement.innerText;
    this.value$.next(this.value);
  }

  ngOnInit(): void {
  }

  select(){
    this.value$.next(this.value);
    this.color = 'primary';
  }

}
