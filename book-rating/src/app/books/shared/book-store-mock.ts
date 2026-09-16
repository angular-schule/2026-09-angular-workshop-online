import { resource, Service } from '@angular/core';
import { Book } from './book';
import { of } from 'rxjs';

@Service()
export class BookStoreMock {
    getAll() {
        return of<Book[]>([]);
    }

    getAllResource() {
        return resource({
            loader: () => Promise.resolve([] as Book[]),
            defaultValue: []
        });
    }
}