import { Component, inject, OnInit } from '@angular/core';
import { NgxFormsService } from '../ngx-forms.service';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'lib-ngx-form-nav',
    templateUrl: './ngx-form-nav.component.html',
    styleUrls: ['./ngx-form-nav.component.scss'],
    imports: [MatIcon]
})
export class NgxFormNavComponent {

  protected ngxs = inject(NgxFormsService);

  previousSection(){
    this.ngxs.previous();
  }

  nextSection(){
    this.ngxs.next();
  }

}
