import { Component, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.scss',
  templateUrl: './book-card.html',
})
export class BookCard {
  readonly book = input.required<Book>();
}
