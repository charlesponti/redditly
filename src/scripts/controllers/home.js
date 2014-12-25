'use strict';

var _ = require('lodash');
var $ = require('jquery');

module.exports = function($scope, Reddit) {
  /**
   * Title of page
   * @type {String}
   */
  $scope.title = "Redditly";

  $scope.error = false;

  /**
   * Store the current search query
   * @type {String}
   */
  $scope.currentSearch = "";

  /**
   * Query from search form
   * @type {String}
   */
  $scope.query = "";

  /**
   * Links from Reddit
   * @type {Array}
   */
  $scope.links = [];

  $scope.toggleError = function() {
    this.error = !this.error;
  };

  /**
   * Handle successful response from Reddit
   * @param {Object} response Response from Reddit
   */
  $scope.onSearchSuccess = function(response) {
    $('.search .list-group').removeClass('out');
    $scope.query = "";

    if ($scope.error) {
      $scope.toggleError();
    }
    
    $scope.links = _.pluck(response.data.children, 'data');
    return $scope;
  };

  /**
   * Handle failure response from Reddit
   * @param {Object} response Response from Reddit
   */
  $scope.onSearchFail = function(response) {
    $('.search .list-group').removeClass('out');
    $scope.links = [];
    $scope.toggleError();
    return $scope;
  };

  /**
   * Handle submission of search form
   */
  $scope.onSubmit = function() {
    $('.search .list-group').addClass('out');
    $scope.currentSearch = $scope.query;
    var promise = Reddit.get({ query: $scope.query.replace(' ','') }).$promise;
    promise.then($scope.onSearchSuccess);
    promise.catch($scope.onSearchFail);
    return promise;
  };

  return $scope;
};
