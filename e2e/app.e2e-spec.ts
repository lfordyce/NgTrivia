import { NgRwaPage } from './app.po';

describe('ng-rwa App', () => {
  let page: NgRwaPage;

  beforeEach(() => {
    page = new NgRwaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
