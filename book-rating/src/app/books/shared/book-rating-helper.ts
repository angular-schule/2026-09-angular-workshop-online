import { Service } from '@angular/core';
import { Book } from './book';

@Service()
export class BookRatingHelper {

    rateUp(book: Book): Book {
        return {
            ...book,
            rating: Math.min(5, book.rating + 1)
        };
    }

    rateDown(book: Book): Book {
        // Early Exit / Early Return
        if (book.rating <= 1) {
            return book;
        }

        return {
            ...book,
            rating: book.rating - 1
        }
    }    
}
