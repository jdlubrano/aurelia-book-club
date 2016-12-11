export class App {
  configureRouter(config, router) {
    config.title = 'Dev Book Club';
    config.map([
      { route: '', moduleId: 'dashboard' },
      { route: 'book/:id', moduleId: 'book-detail', name: 'book' }
    ]);

    this.router = router;
  }
}
