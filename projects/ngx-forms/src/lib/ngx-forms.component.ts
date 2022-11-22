import { Component, ViewEncapsulation } from '@angular/core';
import { ApplyFormAnimations } from './ngx-form.animation';
import { NgxFormsService } from './ngx-forms.service';

@Component({
  selector: 'lib-ngx-forms',
  templateUrl: './ngx-forms.component.html',
  styleUrls: ['./ngx-forms.component.scss'],
  animations: [ApplyFormAnimations]
})
export class NgxFormsComponent {
  constructor(public ngxs: NgxFormsService){

  }
}
