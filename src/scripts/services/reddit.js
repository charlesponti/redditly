'use strict';


module.exports = function($http, $q, $resource) {
  return $resource('http://www.reddit.com/r/:query.json', {
    search: { method: 'GET' }
  });
};
