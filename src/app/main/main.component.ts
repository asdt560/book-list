import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';
import { Book } from '../books';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  bookList : Book[] = [];
  booksService: BooksService = inject(BooksService);
  page = 1
  constructor() {
    this.booksService.getBooks(this.page).then((data: Books) => {
      this.bookList = data.results;
    });
  }
}
