'use strict';

describe('Service', function() {

  var service = require('../../src/app/service');
  var $ = require('jquery');

  beforeEach(function() {
    spyOn($, 'ajax');
  });

  describe('.search()', function() {
    it('should call $.get if query supplied', function() {
      service.search('foo');
      expect($.ajax).toHaveBeenCalled();
    });
    it('should not call $.get if no query supplied', function() {
      service.search('');
      expect($.ajax).not.toHaveBeenCalled();
    });
  });

});
