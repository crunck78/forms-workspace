import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgxFormsService } from '../../../ngx-forms.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'lib-question-submitter',
    templateUrl: './question-submitter.component.html',
    styleUrls: ['./question-submitter.component.scss'],
    imports: [MatButton, MatIcon]
})
export class QuestionSubmitterComponent {
  
  ngxs = inject(NgxFormsService);


  @Output() onOk = new EventEmitter();
  @Input() ngxInput : FormControl | FormArray = new FormControl('');



}
