(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('Favorites', Favorites);

  function Favorites($q, lodash, $cordovaToast, $localStorage, analytics) {

    var favorites = [];

    var MESSASES = {
      add: 'お気に入りに追加しました。',
      remove: 'お気に入りから削除しました。'
    };

    // Public API here
    var service = {
      toggle: toggle,
      clear: clear,
      getCurrent: getCurrent
    };

    ////////////
    initialize();

    return service;

    ////////////

    function initialize() {
      if (!angular.isUndefined($localStorage.favorites)) {
        favorites = $localStorage.favorites;
      }
    }

    function getCurrent() {
      return favorites;
    }

    function toggle(stop) {
      var matchedStop = lodash.find(favorites, {
        name: stop.name
      });
      var index = favorites.indexOf(matchedStop);
      return $q(function(resolve, reject) {
        if (matchedStop) {
          stop.favorite = false;
          favorites.splice(index, 1);
          $cordovaToast.showShortBottom(MESSASES.remove);
          analytics.trackRemoveFavoriteEvent(stop);
        } else {
          stop.favorite = true;
          favorites.push(stop);
          $cordovaToast.showShortBottom(MESSASES.add);
          analytics.trackAddFavoriteEvent(stop);
        }
        $localStorage.favorites = favorites;
        resolve();
      });
    }

    function clear() {
      return $q(function(resolve, reject) {
        favorites.length = 0;
        $localStorage.$reset();
        resolve();
      });
    }

  }

})();
