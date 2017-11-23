import { PratikWebPage } from './app.po';

describe('pratik-web App', () => {
  let page: PratikWebPage;

  beforeEach(() => {
    page = new PratikWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
