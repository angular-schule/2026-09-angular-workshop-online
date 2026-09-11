import { Routes } from "@angular/router";
import { DashboardPage } from "./dashboard-page/dashboard-page";
import { BookDetailsPage } from "./book-details-page/book-details-page";

export const booksRoutes: Routes = [
    { path: 'books', component: DashboardPage },
    { path: 'books/:isbn', component: BookDetailsPage },
];