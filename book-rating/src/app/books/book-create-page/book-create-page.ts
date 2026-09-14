import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { form, FormField, FormRoot, max, maxLength, min, minLength, pattern, provideSignalFormsConfig, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe, FormRoot],
  selector: 'app-book-create-page',
  styleUrl: './book-create-page.scss',
  templateUrl: './book-create-page.html',
  providers: [
    provideSignalFormsConfig({ classes: {
      invalid: (field) => field.state().invalid() && field.state().touched()
    }})
  ]
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
      required(path.isbn, { message: 'Die ISBN muss angegeben werden.' });
      pattern(path.isbn, /^\d+$/, { message: 'Die ISBN darf nur aus Zahlen bestehen.' });
      minLength(path.isbn, 10, { message: 'Die ISBN muss mindestens 10 Zeichen besitzen.' });
      maxLength(path.isbn, 13, { message: 'Die ISBN darf maximal 13 Zeichen besitzen.' });
      
      required(path.title, { message: 'Titel muss angegeben werden.' });
      
      required(path.price, { message: 'Preis muss angegeben werden.' });

      required(path.rating, { message: 'Bewertung muss angegeben werden.' });
      min(path.rating, 1, { message: 'Bewertung muss zwischen 1 und 5 liegen.' });
      max(path.rating, 5, { message: 'Bewertung muss zwischen 1 und 5 liegen.' });
    }
  );
}
