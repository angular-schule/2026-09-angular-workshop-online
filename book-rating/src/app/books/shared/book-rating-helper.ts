import { Service } from '@angular/core';
import { Book } from './book';

@Service()
export class BookRatingHelper {

    rateUp(book: Book): Book {
        return book; // TODO
    }

    rateDown(book: Book): Book {
        return book; // TODO
    }
    
}
