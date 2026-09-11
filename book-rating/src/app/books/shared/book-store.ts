import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Book } from './book';

@Service()
export class BookStore {
    #http = inject(HttpClient);
    #apiBaseUrl = 'https://api.angular.schule';

    getAll() {
        return this.#http.get<Book[]>(this.#apiBaseUrl + '/books');
    }

    getAllResource() {
        return httpResource<Book[]>(
            () => this.#apiBaseUrl + '/books',
            { defaultValue: [] }
        );
    }

    create(book: Book) {
        return this.#http.post<Book>(this.#apiBaseUrl + '/books', book);
    }

    search(term: string) {
        return this.#http.get<Book[]>(`${this.#apiBaseUrl}/books/search/${term}`);
    }
}