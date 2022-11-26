import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-single-choice-question',
  templateUrl: './single-choice-question.component.html',
  styleUrls: ['./single-choice-question.component.scss']
})
export class SingleChoiceQuestionComponent implements OnInit {

  id!: number;
  formArray = new FormArray<FormControl>([]);

  constructor(public ngxs: NgxFormsService) {
    this.id = this.ngxs.appendSection();
    this.ngxs.appendControl(this.formArray);
  }

  ngOnInit(): void {
  }

}
