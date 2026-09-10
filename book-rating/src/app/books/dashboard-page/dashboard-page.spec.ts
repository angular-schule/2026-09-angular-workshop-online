import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';
import { Book } from '../shared/book';
import { Mock } from 'vitest';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let rateUpMockFn: Mock;
  let rateDownMockFn: Mock;

  beforeEach(async () => {
    rateUpMockFn = vi.fn();
    rateDownMockFn = vi.fn();

    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        {
          provide: BookRatingHelper,
          useValue: {
            rateUp: rateUpMockFn,
            rateDown: rateDownMockFn,
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);

    // TS-Klasseninstanz
    component = fixture.componentInstance;

    // DOM-Element
    // fixture.nativeElement.querySelector('p')

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp for doRateUp()', () => {
    // ARRANGE
    const testBook = { isbn: 'abc', rating: 3 } as Book; // Type Assertion: gefährlich, aber im Test OK

    // Mock-Verhalten steuern
    rateUpMockFn.mockReturnValue(testBook);

    // ACT
    component.doRateUp(testBook);

    // ASSERT
    expect(rateUpMockFn).toHaveBeenCalledExactlyOnceWith(testBook);
    expect(rateDownMockFn).not.toHaveBeenCalled();
  });
});
