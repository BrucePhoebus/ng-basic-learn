import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoExerciseComponent } from './memo-exercise.component';

describe('MemoExerciseComponent', () => {
  let component: MemoExerciseComponent;
  let fixture: ComponentFixture<MemoExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
