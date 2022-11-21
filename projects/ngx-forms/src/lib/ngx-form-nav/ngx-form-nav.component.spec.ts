import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormNavComponent } from './ngx-form-nav.component';

describe('NgxFormNavComponent', () => {
  let component: NgxFormNavComponent;
  let fixture: ComponentFixture<NgxFormNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
