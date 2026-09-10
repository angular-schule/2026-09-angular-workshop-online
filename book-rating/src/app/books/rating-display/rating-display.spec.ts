import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingDisplay } from './rating-display';
import { inputBinding } from '@angular/core';

describe('RatingDisplay', () => {
  let component: RatingDisplay;
  let fixture: ComponentFixture<RatingDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingDisplay, {
      bindings: [
        inputBinding('value', () => 3)
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
