import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePracticeComponent } from './note-practice.component';

describe('NotePracticeComponent', () => {
  let component: NotePracticeComponent;
  let fixture: ComponentFixture<NotePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
