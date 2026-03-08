import { Component, inject } from '@angular/core';
import { ApplyFormAnimations } from './ngx-form.animation';
import { NgxFormsService } from './ngx-forms.service';
import { NgxFormNavComponent } from './ngx-form-nav/ngx-form-nav.component';

@Component({
    selector: 'lib-ngx-forms',
    templateUrl: './ngx-forms.component.html',
    styleUrls: ['./ngx-forms.component.scss'],
    animations: [ApplyFormAnimations],
    imports: [NgxFormNavComponent]
})
export class NgxFormsComponent {
  ngxs = inject(NgxFormsService);
}
