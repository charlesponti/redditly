'use strict';

// Dependencies
require('angular');
require('angular-route');
require('angular-resource');
require('angular-animate');
require('angularfire');

angular.module('Redditly', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'firebase'
  ])
  .config(require('./router'))
  .factory('Reddit', require('./services/reddit'))
  .controller('HomeCtrl', require('./controllers/home'));
