import { Component, inject } from '@angular/core';
import { Book, Books } from '../books';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  bookList : Book[] = [];
  booksService: BooksService = inject(BooksService);
  route : ActivatedRoute = inject(ActivatedRoute);
  factor : string = this.route.snapshot.paramMap.get('type') || 'topic';
  value : string = this.route.snapshot.paramMap.get('value') || '';
  go : string = this.route.snapshot.paramMap.get('go') || '';
  basicStyle = "border-double border-4 border-amber-600 rounded-md m-3 p-1 bg-amber-100 text-amber-950";

  constructor() {
    if(this.go === 'true') {
      this.search(this.factor, this.value);
    }
  }
  search = (factor : string, value : string): void => {
    this.booksService.getBooksByFactor(factor, value).then((data: Books | undefined) => {
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
