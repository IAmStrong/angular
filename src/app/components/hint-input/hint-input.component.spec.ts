import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintInputComponent } from './hint-input.component';

describe('HintInputComponent', () => {
  let component: HintInputComponent;
  let fixture: ComponentFixture<HintInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
