import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionShowHiddenComponent } from './transition-show-hidden.component';

describe('ComponentNameComponent', () => {
  let component: TransitionShowHiddenComponent;
  let fixture: ComponentFixture<TransitionShowHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionShowHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionShowHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
