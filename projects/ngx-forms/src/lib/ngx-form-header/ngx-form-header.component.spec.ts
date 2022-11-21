import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormHeaderComponent } from './ngx-form-header.component';

describe('NgxFormHeaderComponent', () => {
  let component: NgxFormHeaderComponent;
  let fixture: ComponentFixture<NgxFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
