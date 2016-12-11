import moment from 'moment';

export class Dashboard {
  constructor() {
    this.readingList = [
      {
        id: 1,
        title: 'Refactoring',
        authors: ['Martin Fowler'],
        startDate: moment("2016-12-04").format('MM/DD/YYYY'),
        endDate: null
      }
    ];
  }

  readingAssignment() {
    return 'HAI!';
  }
}
