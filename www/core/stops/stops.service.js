(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('Stops', Stops);

  function Stops($q, lodash, Seeds, Favorites) {

    var stops = angular.copy(Seeds.stops);

    // Public API here
    var service = {
      findAll: findAll,
      findById: findById,
      clear: clear
    };

    return service;

    ////////////
    function findAll() {
      return mixFavorites(stops);
    }

    function findById(id) {
      // return $q(function(resolve, reject) {
      //   resolve(lodash.find(routes, {
      //     id: parseInt(id, 10)
      //   }));
      // });
    }

    function mixFavorites(hiraganas) {
      var currentFavorites = Favorites.getCurrent();
      angular.forEach(hiraganas, function(hiragana) {
        angular.forEach(hiragana.stops, function(stop) {
          // favoriteを一旦削除
          stop.favorite = false;
          // favoriteがあれば設定する
          angular.forEach(currentFavorites, function(favorite) {
            if (this.keepGoing) {
              if (stop.name === favorite.name) {
                stop.favorite = true;
                this.keepGoing = false;
              }
            }
          }, {
            keepGoing: true
          });
        });
      });
      return hiraganas;
    }

    function clear() {
      return $q(function(resolve, reject) {
        stops = angular.copy(Seeds.stops);
        resolve();
      });
    }

  }

})();
