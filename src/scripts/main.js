'use strict';

// Dependencies
require('angular');
require('angular-route');
require('angular-resource');

var angular = window.angular;

angular.module('Redditly', ['ngRoute', 'ngResource'])
  .config(require('./router'))
  .factory('Reddit', require('./services/reddit'))
  .controller('HomeCtrl', require('./controllers/home'));
