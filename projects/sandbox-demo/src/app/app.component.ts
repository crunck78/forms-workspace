import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgxValidatorsService } from 'ngx-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngxValidators : NgxValidatorsService){

  }
  title = 'sandbox-demo';
  Validators = this.ngxValidators.Validators;
}
