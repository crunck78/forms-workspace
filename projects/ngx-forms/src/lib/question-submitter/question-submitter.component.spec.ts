import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSubmitterComponent } from './question-submitter.component';

describe('QuestionSubmitterComponent', () => {
  let component: QuestionSubmitterComponent;
  let fixture: ComponentFixture<QuestionSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSubmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
