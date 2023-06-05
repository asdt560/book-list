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
  bookDetail! : Book | null;
  route : ActivatedRoute = inject(ActivatedRoute);
  id : number | null = Number(this.route.snapshot.paramMap.get('id'));
  listStyle: string = 'border-2 border-amber-500 border-double p-1'
  
  constructor() {
    if(this.id === null) return;
    this.bookDetail = this.booksService.getSingleBook(this.id)
  }
  
}
