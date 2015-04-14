(function() {
  'use strict';

  angular.module('transitbus')
    .controller('FavoriteController', FavoriteController);

  function FavoriteController(Favorites, routeMap, directionModal) {

    var vm = this;
    vm.favorites = Favorites.getCurrent();
    vm.toggleFavorite = Favorites.toggle;
    vm.openDirectionModal = directionModal.open;
    vm.openRouteMap = routeMap.open;

    ////////////

  }

})();
