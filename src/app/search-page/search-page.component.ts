import { Component, inject } from '@angular/core';
import { Book, Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  bookList : Book[] = [];
  booksService: BooksService = inject(BooksService);
  factor : string = 'topic';
  value : string = '';

  search = () => {
    this.booksService.getBooksByFactor(this.factor, this.value).then((data: Books | undefined) => {
      this.bookList = data!.results;
    });
  }
}
