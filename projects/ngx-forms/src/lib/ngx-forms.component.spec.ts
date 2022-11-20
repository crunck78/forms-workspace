import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormsComponent } from './ngx-forms.component';

describe('NgxFormsComponent', () => {
  let component: NgxFormsComponent;
  let fixture: ComponentFixture<NgxFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
