'use strict';

var _ = require('lodash');

module.exports = function($scope, Reddit) {
  /**
   * Title of page
   * @type {String}
   */
  $scope.title = "Redditly";

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

  /**
   * Handle successful response from Reddit
   * @param {Object} response Response from Reddit
   */
  $scope.onSearchSuccess = function(response) {
    $scope.links = _.pluck(response.data.children, 'data');
    return $scope;
  };

  /**
   * Handle failure response from Reddit
   * @param {Object} response Response from Reddit
   */
  $scope.onSearchFail = function(response) {
    return console.warn(response.message);
  };

  /**
   * Handle submission of search form
   */
  $scope.onSubmit = function() {
    $scope.currentSearch = $scope.query;
    var promise = Reddit.get({ query: $scope.query }).$promise;
    promise.then($scope.onSearchSuccess);
    promise.catch($scope.onSearchFail);
    return promise;
  };

  return $scope;
};
