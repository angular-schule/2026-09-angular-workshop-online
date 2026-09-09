import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardPage } from "./books/dashboard-page/dashboard-page";

@Component({
  imports: [RouterOutlet, DashboardPage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Book Rating');
}
