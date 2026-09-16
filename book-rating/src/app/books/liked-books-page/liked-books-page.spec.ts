import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikedBooksPage } from './liked-books-page';

describe('LikedBooksPage', () => {
  let component: LikedBooksPage;
  let fixture: ComponentFixture<LikedBooksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikedBooksPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LikedBooksPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
