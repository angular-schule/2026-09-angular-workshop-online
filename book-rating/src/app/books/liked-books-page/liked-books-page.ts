import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookStore } from '../shared/book-store';

@Component({
  imports: [RouterLink],
  selector: 'app-liked-books-page',
  styleUrl: './liked-books-page.scss',
  templateUrl: './liked-books-page.html',
})
export class LikedBooksPage {
  protected readonly store = inject(BookStore);
}
