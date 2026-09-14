import { Routes } from "@angular/router";
import { DashboardPage } from "./dashboard-page/dashboard-page";
import { BookDetailsPage } from "./book-details-page/book-details-page";
import { BookCreatePage } from "./book-create-page/book-create-page";
import { BookSearchPage } from "./book-search-page/book-search-page";

export const booksRoutes: Routes = [
    { path: 'books', component: DashboardPage, title: 'Dashboard' },
    { path: 'books/create', component: BookCreatePage, title: 'Erstellen' },
    { path: 'books/search', component: BookSearchPage, title: 'Suche' },
    { path: 'books/:isbn', component: BookDetailsPage, title: 'Details' },
];

// Resolver für Title:
// title: (snapshot) => `Details ${snapshot.paramMap.get('isbn')}`