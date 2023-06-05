import { Injectable } from '@angular/core';
import { Book, Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?'
  state : Books | null = null;
  constructor() { }
  async getBooksByFactor(factor : string, value : string): Promise<Books> {
    const data = await fetch(`${this.url}${factor}=${value}`);
    console.log(data)
    this.state = await data.json();
    console.log(this.state)
    return await data.json() ?? [];
  }
  getSingleBook(id : number): Book | null {
    if(this.state === null) return null;
    return this.state.results.filter((item) => item.id === id)[0] ?? [];
  }
}
