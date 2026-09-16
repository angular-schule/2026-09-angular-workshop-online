import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookStore } from '../shared/book-store';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterLink, JsonPipe],
  selector: 'app-book-details-page',
  styleUrl: './book-details-page.scss',
  templateUrl: './book-details-page.html',
})
export class BookDetailsPage {
  #store = inject(BookStore);

  readonly isbn = input.required<string>();
  protected readonly book = inject(BookStore).getSingle(this.isbn);

  // Alternative Implementierung mit RxJS
  protected readonly book2 = toSignal(
    toObservable(this.isbn).pipe(
      switchMap(isbn => this.#store.getSingle2(isbn))
    )
  );
}
