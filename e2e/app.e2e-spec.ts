import { RuyPage } from './app.po';

describe('ruy App', () => {
  let page: RuyPage;

  beforeEach(() => {
    page = new RuyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
