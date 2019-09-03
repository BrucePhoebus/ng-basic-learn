import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowWayBindComponent } from './tow-way-bind.component';

describe('TowWayBindComponent', () => {
  let component: TowWayBindComponent;
  let fixture: ComponentFixture<TowWayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowWayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
