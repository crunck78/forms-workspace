import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { Base, returnProvider } from '../../../ngx-question.model';


@Component({
  selector: 'lib-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss'],
  providers: [returnProvider(TextQuestionComponent)]
})
export class TextQuestionComponent extends Base implements OnInit {

  @Input() placeholder: string = "Text";

  constructor(public ngxs: NgxFormsService) {
    super();
    this.input = new FormControl('');
    this.id = this.ngxs.appendSection();
  }

  ngOnInit(): void {
    this.ngxs.appendControl(this.input);
  }

}
