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
  basicStyle = "border-double border-4 border-amber-600 rounded-md m-3 p-1 bg-amber-100 text-amber-950";


  search = () => {
    this.booksService.getBooksByFactor(this.factor, this.value).then((data: Books | undefined) => {
      this.bookList = data!.results;
    });
  }

  changeValue = (event : Event) => {
    if(this.factor === 'search') {
      this.value = (event.target as HTMLInputElement).value.split(' ').join('%20');
    } else {
      this.value = (event.target as HTMLInputElement).value;
    }
  }
}
