import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Black2Component } from './black2.component';

describe('Black2Component', () => {
  let component: Black2Component;
  let fixture: ComponentFixture<Black2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Black2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Black2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
