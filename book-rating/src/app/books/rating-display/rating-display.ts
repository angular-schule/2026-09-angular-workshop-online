import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-rating-display',
  styleUrl: './rating-display.scss',
  templateUrl: './rating-display.html',
})
export class RatingDisplay {
  readonly value = input.required<number>();
  protected readonly starsArray = computed(() => new Array(Math.max(0, this.value())));
}
