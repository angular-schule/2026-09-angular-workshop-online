import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.scss',
  templateUrl: './book-card.html',
})
export class BookCard {
  // Input: hier fließen Daten von der Elternkomponente hinein
  // von oben nach unten
  readonly book = input.required<Book>();

  // Output: hier fließen zur Elternkomponente hinaus
  // von unten nach oben
  readonly rateUp = output<Book>();
  readonly rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }
  
  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
