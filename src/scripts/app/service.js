'use strict';

var $ = require('jquery');

var service = {
  /**
   * Search Reddit for sub-reddit matching query
   * @param  {string} query
   * @return {$.Promise}
   */
  search: function(query) {
    return $.get("http://www.reddit.com/r/"+query+'/.json');
  }
};

module.exports = service;
