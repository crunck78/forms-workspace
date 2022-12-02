import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';

@Component({
  selector: 'lib-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss'],
  providers: [returnProvider(InputQuestionComponent)]
})
export class InputQuestionComponent implements OnInit, Base {

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
