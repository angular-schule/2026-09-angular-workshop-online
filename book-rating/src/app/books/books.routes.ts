import { Routes } from "@angular/router";
import { DashboardPage } from "./dashboard-page/dashboard-page";
import { BookDetailsPage } from "./book-details-page/book-details-page";
import { BookCreatePage } from "./book-create-page/book-create-page";
import { BookSearchPage } from "./book-search-page/book-search-page";
import { BooksEntryPage } from "./books-entry-page/books-entry-page";
import { LikedBooksPage } from "./liked-books-page/liked-books-page";
import { BookStoreMock } from "./shared/book-store-mock";
import { BookStore } from "./shared/book-store";

export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksEntryPage,
        children: [
            // diese Routen werden in das Outlet der BooksEntryPage geladen
            { path: '', component: DashboardPage, title: 'Dashboard' },
            { path: 'create', component: BookCreatePage, title: 'Erstellen' },
            { path: 'search', component: BookSearchPage, title: 'Suche' },
            { path: 'favorites', component: LikedBooksPage, title: 'Lieblingsbücher' },
            { path: ':isbn', component: BookDetailsPage, title: 'Details' },
        ],
        providers: [
            // { provide: BookStore, useClass: BookStoreMock }
        ]
    }
];

// Resolver für Title:
// title: (snapshot) => `Details ${snapshot.paramMap.get('isbn')}`