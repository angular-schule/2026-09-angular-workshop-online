import { Component } from '@angular/core';
import { Subject, ReplaySubject, merge, concat, race, forkJoin, EMPTY, map } from 'rxjs';

import { HistoryWindow } from '../shared/history-window/history-window';
import { ChatWindow } from './chat-window/chat-window';

@Component({
  templateUrl: './exercise-chat.html',
  imports: [ChatWindow, HistoryWindow]
})
export class ExerciseChat {
  msgRaw = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  #msg = {
    julia$: this.msgRaw.julia$.pipe(map(msg => 'JULIA: ' + msg)),
    georg$: this.msgRaw.georg$.pipe(map(msg => 'GEORG: ' + msg)),
    john$: this.msgRaw.john$.pipe(map(msg => 'JOHN: ' + msg)),
  };

  logStream$ = new ReplaySubject<unknown>();

  constructor() {

    /**
     * Führe die Nachrichten aller Teilnehmenden in einem Datenstrom zusammen.
     *
     * Abonniere hierfür den Datenstrom und gib die Nachrichten mit der Methode this.log() aus.
     * - merge (Turn multiple observables into a single observable.)
     * - concat (Emit values from source 1, when complete, subscribe to source 2...)
     * - race (The observable to emit first is used.)
     * - forkJoin (When all observables complete, emit the last emitted value from each.)
     */

    /**************!!**************/

     EMPTY.subscribe({                                   
      next: e => this.log(e),
      error: err => this.log('❌ ERROR: ' + err),
      complete: () => this.log('✅ All members left')
    });

    /**************!!**************/
  }

  log(msg: unknown) {
    this.logStream$.next(msg);
  }
}
