import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lib-question-title',
    templateUrl: './question-title.component.html',
    styleUrls: ['./question-title.component.scss']
})
export class QuestionTitleComponent {

  @Input() id! : number;

}
