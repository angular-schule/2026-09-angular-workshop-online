import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { ErrorPage } from './error-page/error-page';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
    // bei Weiterleitung vom leeren Pfad (fast) immer pathMatch:full nötig
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePage, title: 'Home' },
    {
        path: 'books',
        children: booksRoutes
    },
    { path: '**', component: ErrorPage, title: 'Fehler' }
];