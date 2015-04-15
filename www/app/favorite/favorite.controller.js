(function() {
  'use strict';

  angular.module('transitbus')
    .controller('FavoriteController', FavoriteController);

  function FavoriteController($scope, Favorites, routeMap, directionModal, analytics) {

    var vm = this;
    vm.favorites = Favorites.getCurrent();
    vm.toggleFavorite = Favorites.toggle;
    vm.openDirectionModal = directionModal.open;
    vm.openRouteMap = routeMap.open;

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      analytics.trackView('favorites');
    });

  }

})();
