import { ElobeggersPage } from './app.po';

describe('elobeggers App', function() {
  let page: ElobeggersPage;

  beforeEach(() => {
    page = new ElobeggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
