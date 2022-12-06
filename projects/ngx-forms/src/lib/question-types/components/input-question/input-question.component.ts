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
export class InputQuestionComponent extends Base implements OnInit {

  @Input() placeholder: string = "Input";

  constructor(public ngxs: NgxFormsService) {
    super();
    this.input = new FormControl('');
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
