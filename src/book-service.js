import moment from 'moment';

let books = [
  {
    id: 1,
    title: 'Refactoring',
    authors: ['Martin Fowler'],
    startDate: moment("2016-12-04").format('MM/DD/YYYY'),
    endDate: null,
    imageUrl: '/images/refactoring.jpg'
  }
];

let readingAssignments = [
  {
    chapters: [1],
    dueDate: moment('2016-12-09')
  },
  {
    chapters: [2],
    dueDate: moment('2016-12-16')
  },
  {
    chapters: [3, 4, 5],
    dueDate: moment('2016-12-23')
  }
];

export class BookService {
  latency = 200; // ms
  isRequesting = false;

  getBooks() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(books);
        this.isRequesting = false;
      }, this.latency);
    });
  }

  getBook(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let book = books.filter(book => book.id == id)[0];
        resolve(book);
        this.isRequesting = false;
      }, this.latency);
    });
  }

  getReadingAssignments() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(readingAssignments);
        this.isRequesting = false;
      }, this.latency);
    });
  }
}
