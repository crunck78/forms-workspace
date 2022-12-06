import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';

@Component({
  selector: 'lib-question-submitter',
  templateUrl: './question-submitter.component.html',
  styleUrls: ['./question-submitter.component.scss']
})
export class QuestionSubmitterComponent implements OnChanges {

  constructor(public ngxs: NgxFormsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }

  @Output() onOk = new EventEmitter();
  @Input() ngxInput : FormControl | FormArray = new FormControl('');



}
