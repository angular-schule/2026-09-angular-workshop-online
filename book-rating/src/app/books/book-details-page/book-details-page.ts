import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookStore } from '../shared/book-store';

@Component({
  imports: [RouterLink],
  selector: 'app-book-details-page',
  styleUrl: './book-details-page.scss',
  templateUrl: './book-details-page.html',
})
export class BookDetailsPage {
  readonly isbn = input.required<string>();
  protected readonly book = inject(BookStore).getSingle(this.isbn);
}
