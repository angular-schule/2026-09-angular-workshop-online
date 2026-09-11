import { Component, computed, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';
import { RatingDisplay } from "../rating-display/rating-display";
import { RouterLink } from '@angular/router';

@Component({
  imports: [CurrencyPipe, RatingDisplay, RouterLink],
  selector: 'app-book-card',
  styleUrl: './book-card.scss',
  templateUrl: './book-card.html',
})
export class BookCard {
  // Input: hier fließen Daten von der Elternkomponente hinein
  // von oben nach unten
  readonly book = input.required<Book>();
  readonly minRating = input(0);
  readonly maxRating = input(10);

  protected readonly rateUpDisabled = computed(() => this.book().rating >= this.maxRating());
  protected readonly rateDownDisabled = computed(() => this.book().rating <= this.minRating());

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
