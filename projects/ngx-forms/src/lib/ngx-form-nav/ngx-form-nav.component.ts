import { Component, OnInit } from '@angular/core';
import { NgxFormsService } from '../ngx-forms.service';

@Component({
  selector: 'lib-ngx-form-nav',
  templateUrl: './ngx-form-nav.component.html',
  styleUrls: ['./ngx-form-nav.component.scss']
})
export class NgxFormNavComponent implements OnInit {

  constructor(public ngxs : NgxFormsService) { }

  ngOnInit(): void {
  }

  previousSection(){
    this.ngxs.previous();
  }

  nextSection(){
    this.ngxs.next();
  }

}
