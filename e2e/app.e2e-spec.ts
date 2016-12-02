import { TripWithMePage } from './app.po';

describe('trip-with-me App', function() {
  let page: TripWithMePage;

  beforeEach(() => {
    page = new TripWithMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
