'use strict';

var service = {
  search: function(query, box) {
    return $.get("http://www.reddit.com/r/"+query+'/.json');
  }
};

module.exports = service;
