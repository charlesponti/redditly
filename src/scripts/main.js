'use strict';

// Dependencies
require('angular');
require('angular-route');
require('angular-resource');

var angular = window.angular;

angular.module('Redditly', ['ngRoute'])
  .config(require('./router'))
  .factory('RedditService', require('./services/reddit'))
  .controller('HomeCtrl', require('./controllers/home'));
