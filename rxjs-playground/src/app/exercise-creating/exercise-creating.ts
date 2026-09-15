import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter, Subscriber, Observer } from 'rxjs';

import { HistoryWindow } from '../shared/history-window/history-window';

@Component({
  templateUrl: './exercise-creating.html',
  imports: [HistoryWindow]
})
export class ExerciseCreating {

  logStream$ = new ReplaySubject<unknown>();

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('resolve 9999');
      resolve(9999)
    }, 2000)
  });

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // of('Leipzig', 'Stuttgart', 'Köln', 'Kiel')
    // interval(1000)         // ---0---1---2---3---4---5 ...
    // timer(3000)            // ---------0|
    // timer(3000, 1000)      // ---------0---1---2---3---4---5 ...
    // timer(0, 1000)         // 0---1---2---3---4---5 ...
    

    
    /*setTimeout(() => {
      myPromise.then(e => console.log(e));
    }, 5000)*/

    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0),
    ).subscribe({
      next: e => this.log(e),
      complete: () => this.log('COMPLETE')
    });

    // this.doThings()


    /******************************/

    // Producer: erzeugt die Daten
    function producer(sub: Subscriber<number>) {
      const result = Math.random();
      sub.next(result);
      sub.next(10);
      sub.next(20);

      setTimeout(() => sub.next(100), 2000);
      setTimeout(() => sub.next(200), 4000);
      setTimeout(() => sub.complete(), 5000);
    }

    // Observer: Sammlung von Callbacks, hört zu
    const obs: Observer<number> = {
      next: (e: number) => console.log(e),
      error: (err: any) => console.error(err),
      complete: () => console.log('FERTIG')
    }

    // producer(obs);
    // Observable: Schnittstelle zwischen Producer und Observer
    const myObs$ = new Observable(producer);
    // myObs$.subscribe(obs);


    const myObs2$ = new Observable<string>(sub => {
      sub.next('ABC');
      sub.complete();
    });

    
    /******************************/
  }

  async doThings() {
    const result = await this.myPromise;
    console.log(result);
  }

  log(msg: unknown) {
    this.logStream$.next(msg);
  }

}
