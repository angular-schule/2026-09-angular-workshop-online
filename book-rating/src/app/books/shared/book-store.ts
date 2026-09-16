import { HttpClient, httpResource } from '@angular/common/http';
import { computed, effect, inject, Service, signal, Signal } from '@angular/core';
import { Book } from './book';

const LIKED_BOOKS_KEY = 'liked-books';

@Service()
export class BookStore {
    #http = inject(HttpClient);
    #apiBaseUrl = 'https://api.angular.schule';

    readonly likedBooks = signal<Book[]>(this.#loadLikedBooks());
    readonly likedBooksCount = computed(() => this.likedBooks().length);

    constructor() {
        effect(() => {
            localStorage.setItem(LIKED_BOOKS_KEY, JSON.stringify(this.likedBooks()));
        });
    }

    #loadLikedBooks(): Book[] {
        const raw = localStorage.getItem(LIKED_BOOKS_KEY);
        return raw ? JSON.parse(raw) : [];
    }

    addLikedBook(book: Book) {
        if (this.likedBooks().some(b => b.isbn === book.isbn)) {
            return;
        }
        this.likedBooks.update(books => [...books, book]);
    }

    clearLikedBooks() {
        this.likedBooks.set([]);
    }

    getAll() {
        return this.#http.get<Book[]>(this.#apiBaseUrl + '/books');
    }

    getAllResource() {
        return httpResource<Book[]>(
            () => this.#apiBaseUrl + '/books',
            { defaultValue: [] }
        );
    }

    getSingle(isbn: () => string) {
        return httpResource<Book>(
            () => `https://api.angular.schule/books/${isbn()}`
        );
    }

    getSingle2(isbn: string) {
        return this.#http.get<Book>(this.#apiBaseUrl + '/books/' + isbn);
    }

    create(book: Book) {
        return this.#http.post<Book>(this.#apiBaseUrl + '/books', book);
    }

    search(term: string) {
        return this.#http.get<Book[]>(`${this.#apiBaseUrl}/books/search/${term}`);
    }

    delete(isbn: string) {
        return this.#http.delete<unknown>(`${this.#apiBaseUrl}/books/${isbn}`);
    }
}