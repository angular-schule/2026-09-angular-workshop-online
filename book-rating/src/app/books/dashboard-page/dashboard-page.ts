import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  imports: [],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  protected readonly books = signal<Book[]>([]);

  constructor() {
    this.books.set([
      {
        isbn: '123',
        title: 'Angular',
        description: 'Das große Praxisbuch',
        authors: ['Ferdinand Malcher', 'Danny Koppenhagen', 'Johannes Hoppe'],
        price: 39.9,
        rating: 5
      }
    ]);
  }


}


/*
TODO:
- Datenmodell (Struktur)
- Daten
- Komponente für 1 Buch
*/
