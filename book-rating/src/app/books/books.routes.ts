import { Routes } from "@angular/router";
import { DashboardPage } from "./dashboard-page/dashboard-page";
import { BookDetailsPage } from "./book-details-page/book-details-page";
import { BookCreatePage } from "./book-create-page/book-create-page";
import { BookSearchPage } from "./book-search-page/book-search-page";
import { BooksEntryPage } from "./books-entry-page/books-entry-page";

export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksEntryPage,
        children: [
            // diese Routen werden in das Outlet der BooksEntryPage geladen
            { path: '', component: DashboardPage, title: 'Dashboard' },
            { path: 'create', component: BookCreatePage, title: 'Erstellen' },
            { path: 'search', component: BookSearchPage, title: 'Suche' },
            { path: ':isbn', component: BookDetailsPage, title: 'Details' },
        ]
    }
];

// Resolver für Title:
// title: (snapshot) => `Details ${snapshot.paramMap.get('isbn')}`