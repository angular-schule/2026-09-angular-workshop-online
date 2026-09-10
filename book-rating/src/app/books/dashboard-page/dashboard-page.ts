import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';

@Component({
  imports: [BookCard],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  protected readonly books = signal<Book[]>([]);

  #ratingHelper = inject(BookRatingHelper);

  constructor() {
    this.books.set([
      {
        isbn: '123',
        title: 'Angular',
        description: 'Das große Praxisbuch',
        authors: ['Ferdinand Malcher', 'Danny Koppenhagen', 'Johannes Hoppe'],
        price: 39.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'TypeScript',
        description: 'Einstieg und Praxis für Fortgeschrittene',
        authors: ['Erika Mustermann'],
        price: 34.9,
        rating: 4
      },
      {
        isbn: '789',
        title: 'RxJS',
        description: 'Reaktive Programmierung mit Observables',
        authors: ['Max Mustermann', 'Erika Mustermann'],
        price: 29.9,
        rating: 3
      },
      {
        isbn: '234',
        title: 'Signals in Angular',
        description: 'Moderne Zustandsverwaltung ohne Zone.js',
        authors: ['Danny Koppenhagen'],
        price: 24.9,
        rating: 5
      },
      {
        isbn: '567',
        title: 'Web Components',
        description: 'Wiederverwendbare Bausteine für das Web',
        authors: ['Johannes Hoppe'],
        price: 19.9,
        rating: 2
      },
      {
        isbn: '890',
        title: 'Testing mit Angular',
        description: 'Unit- und E2E-Tests in der Praxis',
        authors: ['Ferdinand Malcher', 'Max Mustermann'],
        price: 44.9,
        rating: 4
      }
    ]);
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