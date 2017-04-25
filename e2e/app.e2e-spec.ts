import { AngFirChatPage } from './app.po';

describe('ang-fir-chat App', function() {
  let page: AngFirChatPage;

  beforeEach(() => {
    page = new AngFirChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
