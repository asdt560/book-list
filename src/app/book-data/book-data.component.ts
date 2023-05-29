import { Component, Input } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent {
  @Input() bookData!: Book;
}
