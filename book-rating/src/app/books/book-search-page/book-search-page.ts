import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-book-search-page',
  styleUrl: './book-search-page.scss',
  templateUrl: './book-search-page.html',
})
export class BookSearchPage {
  protected readonly searchData = signal('');
  protected readonly searchForm = form(this.searchData);

  constructor() {
    toObservable(this.searchData).subscribe(e => {
      console.log(e);
    });
  }
}
