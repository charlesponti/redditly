/* global angular */

describe('Controllers: HomeCtrl', function() {
  'use strict';

  var $scope;

  require('../spec-helper.js');

  beforeEach(function() {
    // mock the controller
    angular.mock.inject(function($rootScope, $controller) {
      $scope = $controller('HomeCtrl', {
        $scope: $rootScope.$new()
      });
    });
  });

  afterEach(function() {
    $scope = undefined;
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
