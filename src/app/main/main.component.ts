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

  callBooks = () => {
    this.booksService.getBooks(this.page).then((data: Books | undefined) => {
      this.bookList = data!.results;
    });
  }
  pageChange = (event : Event) => {
    this.page = Number(event);
    this.callBooks();
  }
  pageForward = () => {
    this.page += 1;
    this.callBooks();
  }
  pageBack = () => {
    if(this.page === 1) return;
    this.page -= 1;
    this.callBooks();
  }
  constructor() {
    this.callBooks();
  }
}
