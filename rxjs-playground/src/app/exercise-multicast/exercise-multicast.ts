import { Component, OnDestroy, inject, signal } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { HistoryWindow } from '../shared/history-window/history-window';

@Component({
  templateUrl: './exercise-multicast.html',
  imports: [HistoryWindow, AsyncPipe, DecimalPipe]
})
export class ExerciseMulticast implements OnDestroy {

  #mvs = inject(MeasureValuesService);

  readonly listeners = signal<number[]>([]);
  logStream$ = new ReplaySubject<unknown>();
  #destroy$ = new Subject<void>();
  #listenerId = 1;

  measureValues$: Observable<number>; // später: Subject<number>;

  constructor() {
    /**************!!**************/
    this.measureValues$ = this.#mvs.getValues();
    /**************!!**************/

  }

  addListener() {
    this.listeners.update(listeners => [...listeners, this.#listenerId++]);
  }

  addConsoleListener() {
    const index = this.#listenerId++;
    this.measureValues$.pipe(takeUntil(this.#destroy$)).subscribe(e => this.logStream$.next(`Listener #${index}: ${e}`));
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
  }

}
