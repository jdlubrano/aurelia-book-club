import moment from 'moment';
import {BookService} from './book-service';

export class Dashboard {
  static inject() { return [BookService]; }

  constructor(BookService) {
    this.readingList = [];
    this.readingAssignmentsIndex = null;
    this.readingAssignments = [];
    this.bookService = BookService;
  }

  created() {
    this.bookService.getBooks().then(books => {
      this.readingList = books;
    });

    this.bookService.getReadingAssignments().then(assignments => {
      this.readingAssignments = assignments;

      let readingAssignment = assignments.filter(assignment => {
        return assignment.dueDate.isSameOrAfter(moment().startOf('day'));
      })[0];

      this.readingAssignmentIndex = this.readingAssignments
        .indexOf(readingAssignment);
    });
  }

  next() {
    if (this.readingAssignmentIndex < (this.readingAssignments.length - 1)) {
      this.readingAssignmentIndex++;
    }
  }

  prev() {
    if (this.readingAssignmentIndex > 0) {
      this.readingAssignmentIndex--;
    }
  }
}
