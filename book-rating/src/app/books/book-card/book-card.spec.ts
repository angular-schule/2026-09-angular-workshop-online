import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCard } from './book-card';
import { inputBinding } from '@angular/core';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCard,
      {
        bindings: [
          inputBinding('book', () => ({
            isbn: '435435',
            title: 'Angular',
            description: '',
            rating: 5,
            price: 10,
            authors: []
          }))
        ]
      }
    );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
