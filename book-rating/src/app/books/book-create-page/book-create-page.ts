import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { form, FormField, FormRoot, max, maxLength, min, minLength, pattern, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe, FormRoot],
  selector: 'app-book-create-page',
  styleUrl: './book-create-page.scss',
  templateUrl: './book-create-page.html',
})
export class BookCreatePage {
  // Data Model
  protected readonly bookFormData = signal<Book>({
    isbn: '',
    title: '',
    description: '',
    rating: 1,
    price: 0,
    authors: []
  });

  // Form Model
  protected readonly bookForm = form(
    this.bookFormData,
    path => {
      required(path.isbn);
      pattern(path.isbn, /^\d+$/);
      minLength(path.isbn, 10);
      maxLength(path.isbn, 13);
      
      required(path.title);
      
      required(path.price);

      required(path.rating);
      min(path.rating, 1);
      max(path.rating, 5);
    }
  );
}
