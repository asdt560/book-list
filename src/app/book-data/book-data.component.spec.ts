import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BookDataComponent } from './book-data.component';
import { TruncatePipe } from '../truncate.pipe';
import { Book } from '../books';

const mockBooksService : Book = {
  "id": 1513,
  "title": "Romeo and Juliet",
  "authors": [
        {
      "name": "Shakespeare, William",
      "birth_year": 1564,
      "death_year": 1616
    }
  ],
  "translators": [],
  "subjects": [
    "Conflict of generations -- Drama",
    "Juliet (Fictitious character) -- Drama",
    "Romeo (Fictitious character) -- Drama",
    "Tragedies",
    "Vendetta -- Drama",
    "Verona (Italy) -- Drama",
    "Youth -- Drama"
  ],
  "bookshelves": [],
  "languages": [
    "en"
  ],
  "copyright": false,
  "media_type": "Text",
  "formats": {
    "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/1513.kf8.images",
    "application/epub+zip": "https://www.gutenberg.org/ebooks/1513.epub3.images",
    "text/html": "https://www.gutenberg.org/ebooks/1513.html.images",
    "application/octet-stream": "https://www.gutenberg.org/files/1513/1513-0.zip",
    "image/jpeg": "https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg",
    "text/plain": "https://www.gutenberg.org/ebooks/1513.txt.utf-8",
    "text/plain; charset=us-ascii": "https://www.gutenberg.org/files/1513/1513-0.txt",
    "application/rdf+xml": "https://www.gutenberg.org/ebooks/1513.rdf"
  },
  "download_count": 154294
};

describe('BookDataComponent', () => {
  let component: BookDataComponent;
  let fixture: ComponentFixture<BookDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookDataComponent, TruncatePipe]
    });
    fixture = TestBed.createComponent(BookDataComponent);
    component = fixture.componentInstance;
    component.bookData = mockBooksService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
