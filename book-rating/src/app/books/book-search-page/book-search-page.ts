import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { form, FormField } from '@angular/forms/signals';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { BookStore } from '../shared/book-store';

@Component({
  imports: [FormField],
  selector: 'app-book-search-page',
  styleUrl: './book-search-page.scss',
  templateUrl: './book-search-page.html',
})
export class BookSearchPage {
  #store = inject(BookStore);

  protected readonly searchData = signal('');
  protected readonly searchForm = form(this.searchData);

  protected readonly results = toSignal(toObservable(this.searchData).pipe(
    debounceTime(200),
    filter(term => term.length >= 3),
    distinctUntilChanged(),
    switchMap(term => this.#store.search(term))
  ), { initialValue: [] });
}
