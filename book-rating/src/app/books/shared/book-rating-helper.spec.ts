import { TestBed } from '@angular/core/testing';
import { BookRatingHelper } from './book-rating-helper';
import { Book } from './book';

describe('BookRatingHelper', () => {
  let service: BookRatingHelper;
  let book: Book;

  beforeEach(() => {
    // ARRANGE
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingHelper);

    book = {
      isbn: '',
      title: '',
      description: '',
      price: 1,
      authors: [],
      rating: 3
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book by one', () => {
    // ARRANGE
    book.rating = 3;

    // ACT
    const ratedBook = service.rateUp(book);

    // ASSERT
    expect(ratedBook.rating).toBe(4); // NICHT: .toBe(book.rating + 1)
  });
  
  it('should rate down a book by one', () => {
    book.rating = 3;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });
  
  it('should not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });



  it('should not change the original book when rating up', () => {
    book.rating = 3;
    service.rateUp(book);
    expect(book.rating).toBe(3);
  });

  it('should not change the original book when rating down', () => {
    book.rating = 3;
    service.rateDown(book);
    expect(book.rating).toBe(3);
  });

  it('should return a new object when rating up', () => {
    book.rating = 3;
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);
  });

  it('should return a new object when rating down', () => {
    book.rating = 3;
    const ratedBook = service.rateDown(book);
    expect(ratedBook).not.toBe(book);
  });

  it('should keep all other properties when rating up', () => {
    // ARRANGE
    book = {
      isbn: '123',
      title: 'Angular',
      description: 'Das große Buch',
      authors: ['Ferdinand', 'Johannes', 'Danny'],
      price: 42,
      rating: 3
    };

    // ACT
    const ratedBook = service.rateUp(book);

    // ASSERT
    expect(ratedBook).toEqual({ ...book, rating: 4 });
  });

  it('should keep all other properties when rating down', () => {
    book = {
      isbn: '123',
      title: 'Angular',
      description: 'Das große Buch',
      authors: ['Ferdinand', 'Johannes', 'Danny'],
      price: 42,
      rating: 3
    };

    const ratedBook = service.rateDown(book);

    expect(ratedBook).toEqual({ ...book, rating: 2 });
  });
});
