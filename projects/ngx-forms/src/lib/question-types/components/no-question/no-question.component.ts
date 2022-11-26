import { Component, OnInit } from '@angular/core';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-no-question',
  templateUrl: './no-question.component.html',
  styleUrls: ['./no-question.component.scss']
})
export class NoQuestionComponent implements OnInit {

  id!: number;
  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
  }

  

}
