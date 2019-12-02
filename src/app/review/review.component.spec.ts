import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';

describe('BooksComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<LeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
