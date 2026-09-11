import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookStore } from '../shared/book-store';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [BookCard],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  #store = inject(BookStore);
  #ratingHelper = inject(BookRatingHelper);
  
  protected readonly books = signal<Book[]>([]);

  constructor() {
    this.#store.getAll().subscribe(receivedBooks => {
      this.books.set(receivedBooks);
    });
  }

  doRateUp(book: Book) {
    const ratedBook = this.#ratingHelper.rateUp(book);
    this.#updateList(ratedBook);
  }
  
  doRateDown(book: Book) {
    const ratedBook = this.#ratingHelper.rateDown(book);
    this.#updateList(ratedBook);
  }

  #updateList(ratedBook: Book) {
    // [1,2,3,4,5,6].map(e => e * 10) // [10, 20, 30, 40, 50, 60]
    // [1,2,3,4,5,6,7,8,9].filter(e => e > 5) // [6, 7, 8, 9]

    this.books.update(currentList => {
      return currentList.map(b => {
        if (b.isbn === ratedBook.isbn) {
          return ratedBook;
        } else {
          return b
        }
      });
    });
  }
}