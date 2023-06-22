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
  basicStyle = "border-double border-4 border-amber-600 rounded-md mx-1 my-2 md:m-3 p-1 bg-amber-100 text-amber-950";
  bookList : Book[] = [];
  booksService: BooksService = inject(BooksService);
  page = 1

  callBooks = () => {
    this.booksService.getBooks(`${this.page}`).then((data: Books) => {
      this.bookList = data.results;
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
    if(!this.booksService.state) {
      this.callBooks();
    } else {
      this.bookList = this.booksService.state.results;
    }
  }
}
