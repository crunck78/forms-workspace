import { Component, OnInit } from '@angular/core';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent implements OnInit {

  id!: number;

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
  }


  ngOnInit(): void {
  }

}
