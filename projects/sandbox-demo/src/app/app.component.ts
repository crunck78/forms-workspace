import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgxFormsService } from 'ngx-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ngxFormsS : NgxFormsService){

  }
  title = 'sandbox-demo';
  Validators = Validators;
}
