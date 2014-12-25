'use strict';

var _ = require('lodash');

module.exports = function($scope, RedditService) {
  /**
   * Title of page
   * @type {String}
   */
  $scope.title = "Redditly";

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
    return RedditService
            .search($scope.query)
            .then($scope.onSearchSuccess)
            .catch($scope.onSearchFail);
  };

  return $scope;
};
