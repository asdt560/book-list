import { Injectable } from '@angular/core';
import { Book, Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?page='
  constructor() { }
  async getBooks(page : number): Promise<Books | undefined> {
    const data = await fetch(`${this.url}${page}`);
    return await data.json() ?? [];
  }
  async getBookByID(id : number): Promise<Books> {
    const data = await fetch(`https://gutendex.com/books?ids=${id}`);
    return await data.json() ?? [];
  }
}
