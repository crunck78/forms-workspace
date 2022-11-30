import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent implements OnInit {

  id!: number;
  input = new FormControl('');
  @Input() placeholder: string = "Input";

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();

  }


  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
