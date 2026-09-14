import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-books-entry-page',
  styleUrl: './books-entry-page.scss',
  templateUrl: './books-entry-page.html',
})
export class BooksEntryPage {}
