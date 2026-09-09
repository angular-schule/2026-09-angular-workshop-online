import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingDisplay } from './rating-display';

describe('RatingDisplay', () => {
  let component: RatingDisplay;
  let fixture: ComponentFixture<RatingDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
