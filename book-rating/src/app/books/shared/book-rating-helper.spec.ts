import { TestBed } from '@angular/core/testing';
import { BookRatingHelper } from './book-rating-helper';

describe('BookRatingHelper', () => {
  let service: BookRatingHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
