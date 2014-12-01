'use strict';

describe('Service', function() {

  var service;
  var $ = require('jquery');

  beforeEach(function() {
    spyOn($, 'get');
    service = require('../../src/scripts/app/service');
  });

  afterEach(function() {
    service = undefined;
  });

  describe('.search()', function() {
    it('should call $.get if query supplied', function() {
      service.search('foo');
      expect($.get).toHaveBeenCalled();
    });
    it('should not call $.get if no query supplied', function() {
      service.search('');
      expect($.get).not.toHaveBeenCalled();
    });
  });

});
