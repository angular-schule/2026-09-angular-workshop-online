import { Routes } from '@angular/router';
// import { booksRoutes } from './books/books.routes';
import { ErrorPage } from './error-page/error-page';
// import { HomePage } from './home-page/home-page';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    // bei Weiterleitung vom leeren Pfad (fast) immer pathMatch:full nötig
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./home-page/home-page').then(m => m.HomePage),
        title: 'Home'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'books',
        canActivate: [authGuard],
        loadChildren: () => import('./books/books.routes').then(m => m.booksRoutes)
        // children: booksRoutes
    },
    { path: '**', component: ErrorPage, title: 'Fehler' }
];