import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputQuestionComponent } from './phone-input-question.component';

describe('PhoneInputQuestionComponent', () => {
  let component: PhoneInputQuestionComponent;
  let fixture: ComponentFixture<PhoneInputQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneInputQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInputQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
