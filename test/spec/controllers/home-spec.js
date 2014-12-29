/* global angular */

describe('Controllers: HomeCtrl', function() {
  'use strict';

  var $scope;
  var $ = require('jquery');
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

  describe('.onSearchSuccess()', function() {
    var response = {
      data: {
        children: [
          { data: { title: 'foo' } },
          { data: { title: 'bar' } },
        ]
      }
    };
    it('should remove .out', function() {
      spyOn($.fn, 'removeClass');
      $scope.onSearchSuccess(response);
      expect($.fn.removeClass).toHaveBeenCalledWith('out');
    });
    it('should empty $scope.query', function() {
      $scope.query = "foo";
      $scope.onSearchSuccess(response);
      expect($scope.query).toEqual('');
    });
    it('should set $scope.error to false', function() {
      $scope.error = true;
      $scope.onSearchSuccess(response);
      expect($scope.error).toEqual(false);
    });
    it('should populate $scope.links', function() {
      $scope.onSearchSuccess(response);
      expect($scope.links).toEqual([
        {title: 'foo'},
        {title: 'bar'}
      ]);
    });
  });

});
