(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('Stops', Stops);

  function Stops($q, lodash, Seeds, Favorites) {

    var stops = mixFavorites(angular.copy(Seeds.stops));

    // Public API here
    var service = {
      findAll: findAll,
      findById: findById,
      clear: clear
    };

    return service;

    ////////////
    function findAll() {
      return stops;
    }

    function findById(id) {
      // return $q(function(resolve, reject) {
      //   resolve(lodash.find(routes, {
      //     id: parseInt(id, 10)
      //   }));
      // });
    }

    function mixFavorites(hiraganas) {
      angular.forEach(Favorites.getCurrent(), function(favorite) {
        var matchedStop;
        angular.forEach(hiraganas, function(hiragana) {
          if (this.keepGoing) {
            matchedStop = lodash.find(hiragana.stops, {
              name: favorite.name
            });
            if (matchedStop) {
              matchedStop.favorite = true;
              this.keepGoing = false;
            }
          }
        }, {
          keepGoing: true
        });
      });
      return hiraganas;
    }

    function clear() {
      return $q(function(resolve, reject) {
        stops = mixFavorites(angular.copy(Seeds.stops));
        resolve();
      });
    }

  }

})();
