import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputQuestionComponent } from './email-input-question.component';

describe('EmailInputQuestionComponent', () => {
  let component: EmailInputQuestionComponent;
  let fixture: ComponentFixture<EmailInputQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInputQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailInputQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
