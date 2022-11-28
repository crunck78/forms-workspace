import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanChoiceQuestionComponent } from './boolean-choice-question.component';

describe('BooleanChoiceQuestionComponent', () => {
  let component: BooleanChoiceQuestionComponent;
  let fixture: ComponentFixture<BooleanChoiceQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanChoiceQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooleanChoiceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
