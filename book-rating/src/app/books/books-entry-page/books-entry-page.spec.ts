import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BooksEntryPage } from './books-entry-page';

describe('BooksEntryPage', () => {
  let component: BooksEntryPage;
  let fixture: ComponentFixture<BooksEntryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksEntryPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksEntryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
