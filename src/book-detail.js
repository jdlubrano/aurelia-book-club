import {BookService} from './book-service';

export class BookDetail {
  static inject() { return [BookService]; }

  constructor(BookService) {
    this.book = null;
    this.bookService = BookService;
  }

  activate(params, routeConfig) {
    return this.bookService.getBook(params.id).then(book => {
      this.book = book;
    });
  }
}
