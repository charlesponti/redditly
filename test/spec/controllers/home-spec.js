describe('Controllers: HomeCtrl', function() {
  'use strict';

  var $scope, $location, service;
  var HomeCtrl = require('../../../src/scripts/controllers/home');

  beforeEach(function() {
    $scope = {};
    service = {};
    HomeCtrl($scope);
  });

  afterEach(function() {
    $scope = undefined;
    service = undefined;
  });

  it('should have title defined', function() {
    expect($scope.title).toEqual('Redditly');
  });

  it('should have links defined', function() {
    expect($scope.links).toEqual([]);
  });

  it('should have error set to false', function() {
    expect($scope.error).toEqual(false);
  });

  describe('.toggleError()', function() {
    it('should set error to true', function() {
      $scope.toggleError();
      expect($scope.error).toEqual(true);
    });
    it('should set error to false', function() {
      $scope.error = true;
      $scope.toggleError();
      expect($scope.error).toEqual(false);
    });
  });

});
