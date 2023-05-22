import { Injectable } from '@angular/core';
import { Book, Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?'
  constructor() { }
  async getBooksByFactor(factor : string, value : string): Promise<Books> {
    const data = await fetch(`${this.url}${factor}=${value}`);
    return await data.json() ?? [];
  }
}
