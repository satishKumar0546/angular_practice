import { BlockBankCardsPage } from './app.po';

describe('block-bank-cards App', () => {
  let page: BlockBankCardsPage;

  beforeEach(() => {
    page = new BlockBankCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
