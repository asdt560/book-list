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
  basicStyle = "border-double border-4 border-amber-600 rounded-md m-3 p-1 bg-amber-100 text-amber-950";
  bookList : Book[] = [];
  booksService: BooksService = inject(BooksService);
  page = 1

  callBooks = () => {
    this.booksService.getBooksByFactor('page', `${this.page}`).then((data: Books | undefined) => {
      console.log(data)
      this.bookList = data!.results;
    });
  }
  pageChange = (event : Event) => {
    this.page = Number(event);
    console.log(this.page);
    this.callBooks();
  }
  pageForward = () => {
    this.page += 1;
    console.log(this.page);
    this.callBooks();
  }
  pageBack = () => {
    if(this.page === 1) return;
    this.page -= 1;
    console.log(this.page);
    this.callBooks();
  }
  constructor() {
    this.callBooks();
  }
}
