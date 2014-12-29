/* global angular */

describe('Controllers: HomeCtrl', function() {
  'use strict';

  var $scope, $reddit, $q, response;
  var $ = require('jquery');
  require('../spec-helper.js');

  beforeEach(function(done) {
    response = {
      data: {
        children: [
          { data: { title: 'foo' } },
          { data: { title: 'bar' } },
        ]
      }
    };

    // mock the controller
    angular.mock.inject(function($rootScope, $controller, $injector) {
      $q = $injector.get('$q');
      $reddit = $injector.get('Reddit');
      $scope = $controller('HomeCtrl', {
        $scope: $rootScope.$new(),
        Reddit: $reddit
      });
      done();
    });
  });

  afterEach(function() {
    $q =
    $scope =
    $reddit =
    response = undefined;
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

  describe('.onSearchFail()', function() {
    it('should remove .out', function() {
      spyOn($.fn, 'removeClass');
      $scope.onSearchFail(response);
      expect($.fn.removeClass).toHaveBeenCalledWith('out');
    });
    it('should empty $scope.links', function() {
      $scope.links = [
        {title: 'foo'},
        {title: 'bar'}
      ];
      $scope.onSearchFail(response);
      expect($scope.links).toEqual([]);
    });
    it('should set $scope.error to true', function() {
      $scope.error = false;
      $scope.onSearchFail(response);
      expect($scope.error).toEqual(true);
    });
  });

  describe('.onSubmit()', function() {
    it('should call Reddit.get() and set $scope.currentSearch', function() {
      var promise = $q.defer().promise;
      spyOn(promise, 'then');
      spyOn(promise, 'catch');
      $scope.query = "New York";
      spyOn($reddit, 'get').and.returnValue({ $promise:  promise });
      $scope.onSubmit();
      expect($reddit.get).toHaveBeenCalledWith({ query: 'NewYork' });
      expect($scope.currentSearch).toEqual('New York');
    });
  });
});
