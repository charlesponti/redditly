'use strict';

describe('Service', function() {

  var service;

  beforeEach(function() {
    service = require('../../src/scripts/app/service');
  });

  afterEach(function() {
    service = undefined;
  });

  describe('.search()', function() {
    it('should call $.get', function() {
      var $ = require('jquery');
      spyOn($, 'get');
      service.search();
      expect($.get).toHaveBeenCalled();
    });
  });

});
