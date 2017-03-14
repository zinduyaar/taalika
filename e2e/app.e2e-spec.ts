import { TaalikaPage } from './app.po';

describe('taalika App', () => {
  let page: TaalikaPage;

  beforeEach(() => {
    page = new TaalikaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
