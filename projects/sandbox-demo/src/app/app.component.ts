import { Component, inject } from '@angular/core';
import { AppModule } from './app.module';
import { NgxValidatorsService } from 'ngx-forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [AppModule]
})
export class AppComponent {
  private ngxValidators = inject(NgxValidatorsService);
  title = 'sandbox-demo';
  Validators = this.ngxValidators.Validators;
}
