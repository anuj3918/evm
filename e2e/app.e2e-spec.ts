import { RuleCheckerPage } from './app.po';

describe('rule-checker App', () => {
  let page: RuleCheckerPage;

  beforeEach(() => {
    page = new RuleCheckerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
