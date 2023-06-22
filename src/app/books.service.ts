import { Injectable } from '@angular/core';
import { Book, Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://gutendex.com/books/?'
  state! : Books;
  searchState! : Books;
  async getBooks(page : string): Promise<Books> {
    const data = await fetch(`${this.url}page=${page}`);
    this.state = await data.json();
    return this.state;
  }
  async getBooksByFactor(factor : string, value : string): Promise<Books> {
    const data = await fetch(`${this.url}${factor}=${value}`);
    this.searchState = await data.json();
    return this.searchState;
  }
  getSingleBook(id : number): Book | null {
    if(!this.state && !this.searchState) return null;
    return this.state.results.filter((item) => item.id === id)[0] ?? this.searchState.results.filter((item) => item.id === id)[0] ?? null;
  }
}
