import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
    // bei Weiterleitung vom leeren Pfad (fast) immer pathMatch:full nötig
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    ...booksRoutes,
    { path: '**', component: ErrorPage, title: 'Fehler' }
];


/* TODO:
- Root-URL: Weiterleitung zum Dashboard
- Links
    - Karte => Detailseite
    - Detailseite => Liste
- Detailseite
*/