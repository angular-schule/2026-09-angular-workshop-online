import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookStore } from '../shared/book-store';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-books-entry-page',
  styleUrl: './books-entry-page.scss',
  templateUrl: './books-entry-page.html',
})
export class BooksEntryPage {
  protected readonly store = inject(BookStore);
}
