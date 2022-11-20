import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoQuestionComponent } from './no-question.component';

describe('NoQuestionComponent', () => {
  let component: NoQuestionComponent;
  let fixture: ComponentFixture<NoQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
