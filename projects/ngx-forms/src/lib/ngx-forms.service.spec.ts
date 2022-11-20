import { TestBed } from '@angular/core/testing';

import { NgxFormsService } from './ngx-forms.service';

describe('NgxFormsService', () => {
  let service: NgxFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
