import { Component, OnInit } from '@angular/core';
import { NgxFormsService } from '../ngx-forms.service';


@Component({
  selector: 'lib-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {

  id!: number;

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
  }

}
