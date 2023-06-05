import { Injectable } from '@angular/core';
import { Book, Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?'
  state! : Books;
  constructor() { }
  async getBooksByFactor(factor : string, value : string): Promise<Books> {
    const data = await fetch(`${this.url}${factor}=${value}`);
    this.state = await data.json();
    return this.state;
  }
  getSingleBook(id : number): Book | null {
    if(this.state === null) return null;
    return this.state.results.filter((item) => item.id === id)[0] ?? [];
  }
}
