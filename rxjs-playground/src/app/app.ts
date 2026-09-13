import { Component, inject } from '@angular/core';
import { isActive, Router, RouterLink, RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';

@Component({
  selector: 'rxw-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Navbar, RouterLink, RouterOutlet]
})
export class App {
  readonly isLandingPage = isActive('/exercises', inject(Router), {
    paths: 'exact',
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
  });
}
