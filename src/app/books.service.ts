import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?page='
  constructor() { }
  async getBooks(page : number): Promise<Books> {
    const data = await fetch(`${this.url}${page}`);
    return await data.json() ?? [];
  }
}
