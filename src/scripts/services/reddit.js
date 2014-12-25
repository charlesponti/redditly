'use strict';


module.exports = function($http, $q) {
  return {
    /**
    * Search Reddit for sub-reddit matching query
    * @param  {string} query
    * @return {$.Promise}
    */
    search: function(query) {
      var deferred = new $q.defer();

      if (query) {
        $http
          .get('http://www.reddit.com/r/'+query+'.json')
          .success(function(response) {
            return deferred.resolve(response);
          })
          .error(function(response) {
            return deferred.reject(response);
          });
      }

      return deferred.promise;
    }
  };
};
