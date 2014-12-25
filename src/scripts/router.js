'use strict';

module.exports = function($locationProvider, $routeProvider) {

  // Set html5Mode
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'redditly/views/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

};
