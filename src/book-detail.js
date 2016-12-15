import {BookService} from './book-service';

export class BookDetail {
  static inject() { return [BookService]; }

  constructor(bookService) {
    this.book = null;
    this.bookService = bookService;
  }

  activate(params, routeConfig) {
    console.log(params.id);
    return this.bookService.getBook(params.id).then(book => {
      this.book = book;
    });
  }
}
