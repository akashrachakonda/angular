import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShortComponent } from './movie-short.component';

describe('MovieShortComponent', () => {
  let component: MovieShortComponent;
  let fixture: ComponentFixture<MovieShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
