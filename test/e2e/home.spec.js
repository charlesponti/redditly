describe('E2E: Home', function() {
  'use strict';

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should have title set', function() {
    expect(browser.getTitle()).toEqual('Redditly');
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

});
