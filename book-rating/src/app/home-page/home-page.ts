import { Component, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly currentDate = signal<Date>(new Date());
  #x = timer(0, 1000).subscribe(() => {
    this.currentDate.set(new Date());
  });

  ngOnDestroy() {
    this.#x.unsubscribe();
  }
}
