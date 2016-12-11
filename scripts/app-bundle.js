define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Dev Book Club';
      config.map([{ route: '', moduleId: 'dashboard' }, { route: 'book/:id', moduleId: 'book-detail', name: 'book' }]);

      this.router = router;
    };

    return App;
  }();
});
define('dashboard',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Dashboard = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dashboard = exports.Dashboard = function () {
    function Dashboard() {
      _classCallCheck(this, Dashboard);

      this.readingList = [{
        id: 1,
        title: 'Refactoring',
        authors: ['Martin Fowler'],
        startDate: (0, _moment2.default)("2016-12-04").format('MM/DD/YYYY'),
        endDate: null
      }];
    }

    Dashboard.prototype.readingAssignment = function readingAssignment() {
      return 'HAI!';
    };

    return Dashboard;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./style.css\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">\n        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n        <span>Dev Book Club</span>\n      </a>\n    </div>\n  </nav>\n\n  <div class=\"container app-container\">\n    <div class=\"row\">\n      <router-view class=\"col-xs-12\"></router-view>\n    </div>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".app-container {\n  padding-top: 75px; }\n\nul {\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCIiwiZmlsZSI6ImFwcC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiJdfQ== */\n"; });
define('text!dashboard.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"reading-list panel panel-default\">\n        <div class=\"panel-heading\">Reading List</div>\n        <div class=\"panel-body\">\n          <ul>\n            <li repeat.for=\"book of readingList\">\n              <div>\n                <a route-href=\"route: book; params.bind: {id: book.id}\">\n                  ${book.title}\n                </a>\n              </div>\n              <div>Authors: ${book.authors.join(', ')}</div>\n              <div>Started On: ${book.startDate}</div>\n              <div>Finished On: ${book.endDate || 'In Progress'}</div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"jumbotron\">\n        <h4>Next Reading Assigment</h4>\n        <p>${readingAssignment()}</p>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!style.css', ['module'], function(module) { module.exports = ".app-container {\n  padding-top: 75px; }\n\nul {\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuIl19 */\n"; });
//# sourceMappingURL=app-bundle.js.map