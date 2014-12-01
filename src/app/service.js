'use strict';

var $ = require('jquery');

var service = {
  /**
   * Search Reddit for sub-reddit matching query
   * @param  {string} query
   * @return {$.Promise}
   */
  search: function(query) {
    var deferred = new $.Deferred();

    if (query) {
      $.get("http://www.reddit.com/r/"+query+'/.json', {
        success: function(response) {
          deferred.resolve(response);
        },
        fail: function(response) {
          deferred.reject(response);
        }
      });
    }

    return deferred.promise();
  }

};

module.exports = service;
