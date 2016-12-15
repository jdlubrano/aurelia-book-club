export class App {
  configureRouter(config, router) {
    config.title = 'Dev Book Club';
    config.options.pushState = true;
    config.options.root = '/';

    config.map([
      { route: '', moduleId: 'dashboard', name: 'dashboard' },
      { route: 'books/:id', moduleId: 'book-detail', name: 'book' }
    ]);

    this.router = router;
  }
}
