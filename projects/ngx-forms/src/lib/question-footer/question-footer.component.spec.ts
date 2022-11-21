import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFooterComponent } from './question-footer.component';

describe('QuestionFooterComponent', () => {
  let component: QuestionFooterComponent;
  let fixture: ComponentFixture<QuestionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
