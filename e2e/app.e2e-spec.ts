import { TripwithmePage } from './app.po';

describe('tripwithme App', function() {
  let page: TripwithmePage;

  beforeEach(() => {
    page = new TripwithmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
