import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullComponent } from './movie-full.component';

describe('MovieFullComponent', () => {
  let component: MovieFullComponent;
  let fixture: ComponentFixture<MovieFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
