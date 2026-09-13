import {
  Component,
  ElementRef,
  input,
  viewChild,
  inject,
  DestroyRef,
} from '@angular/core';
import {
  takeUntilDestroyed,
  toObservable,
  toSignal,
} from '@angular/core/rxjs-interop';
import {
  Observable,
  Subject,
  debounceTime,
  map,
  merge,
  scan,
  switchAll,
} from 'rxjs';

const RESET = Symbol('RESET');

@Component({
  selector: 'rxw-history-window',
  templateUrl: './history-window.html',
  styleUrl: './history-window.scss',
  imports: []
})
export class HistoryWindow {
  readonly scrollContainer = viewChild.required<ElementRef>('scrollContainer');
  readonly logStream = input.required<Observable<unknown>>();
  #logStream$ = toObservable(this.logStream);

  #destroyRef = inject(DestroyRef);
  #reset$ = new Subject<void>();

  readonly messages = toSignal(
    merge(
      this.#logStream$.pipe(switchAll()),
      this.#reset$.pipe(map(() => RESET))
    ).pipe(
      map(m => {
        if (m === RESET || typeof m === 'string' || typeof m === 'number') {
          return m;
        } else {
          return JSON.stringify(m);
        }
      }),
      scan((acc, message) => {
        if (message === RESET) {
          return [];
        } else {
          return [...acc, message];
        }
      }, [] as (string | number)[])
    ),
    { initialValue: [] }
  );

  constructor() {
    this.#logStream$
      .pipe(switchAll(), debounceTime(20), takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.updateScroll());
  }

  updateScroll() {
    const el = this.scrollContainer().nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  clearHistory() {
    this.#reset$.next();
  }
}
