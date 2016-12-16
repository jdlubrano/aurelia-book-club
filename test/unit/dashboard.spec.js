import {Dashboard} from '../../src/dashboard';

describe('Dashboard', () => {
  describe('constructor', () => {
    it('sets the readingList to an empty array', () => {
      expect(new Dashboard().readingList).toEqual([]);
    });

    it('sets the bookService', () => {
      let mockService = {};
      expect(new Dashboard(mockService).bookService).toBe(mockService);
    });
  });

  describe('created', () => {
    let mockService;

    beforeEach(() => {
      let getBooksSpy = jasmine.createSpy('getBooks')
        .and.returnValue(new Promise(resolve => {}));

      let getReadingAssignmentsSpy = jasmine.createSpy('getBooks')
        .and.returnValue(new Promise(resolve => {}));

      mockService = {
        getBooks: getBooksSpy,
        getReadingAssignments: getReadingAssignmentsSpy
      };
    });

    it('calls bookService.getBooks', () => {
      new Dashboard(mockService).created();

      expect(mockService.getBooks).toHaveBeenCalled();
    });
  });
});

