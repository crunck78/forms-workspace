import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';


@Component({
  selector: 'lib-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {

  id!: number;
  textArea = new FormControl('');
  @Input() placeholder: string = "Text";

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.textArea);
  }

}
