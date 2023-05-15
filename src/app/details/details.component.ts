import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { BooksService } from '../books.service';
import { Book, Books } from '../books';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  booksService: BooksService = inject(BooksService);
  bookDetail! : Book;
  route : ActivatedRoute = inject(ActivatedRoute); 
  
  constructor() {
    this.booksService.getBookByID(Number(this.route.snapshot.paramMap.get('id'))).then((data: Books) => {
      this.bookDetail = data.results[0];
    });
  }

}
