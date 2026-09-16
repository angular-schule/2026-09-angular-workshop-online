import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookStore } from '../shared/book-store';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [BookCard, DatePipe],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  #store = inject(BookStore);
  #ratingHelper = inject(BookRatingHelper);

  protected readonly books = this.#store.getAllResource();

  protected readonly currentTimestamp = toSignal(
    // ---0---1---2---3---4 ...
    interval(1000).pipe(
      map(() => Date.now()),
      tap(e => console.log(e))
    ),
    { initialValue: Date.now() }
  );

  doRateUp(book: Book) {
    const ratedBook = this.#ratingHelper.rateUp(book);
    this.#updateList(ratedBook);
  }
  
  doRateDown(book: Book) {
    const ratedBook = this.#ratingHelper.rateDown(book);
    this.#updateList(ratedBook);
  }

  doDelete(book: Book) {
    this.#store.delete(book.isbn).subscribe(() => {
      this.books.reload();
      // ODER: lokal aktualisieren
      // this.books.value.update(books => books.filter(b => b.isbn !== book.isbn));
    });
  }

  #updateList(ratedBook: Book) {
    // [1,2,3,4,5,6].map(e => e * 10) // [10, 20, 30, 40, 50, 60]
    // [1,2,3,4,5,6,7,8,9].filter(e => e > 5) // [6, 7, 8, 9]

    this.books.value.update(currentList => {
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