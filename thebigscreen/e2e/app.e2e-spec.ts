import { ThebigscreenPage } from './app.po';

describe('thebigscreen App', () => {
  let page: ThebigscreenPage;

  beforeEach(() => {
    page = new ThebigscreenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
