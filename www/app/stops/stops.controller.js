(function() {
  'use strict';

  angular.module('transitbus')
    .controller('StopsController', StopsController);

  function StopsController($scope, Stops, directionModal, pdfStore, Favorites, routeMap) {

    var vm = this;
    vm.previewPdf = pdfStore.preview;
    vm.openDirectionModal = directionModal.open;
    vm.toggleFavorite = toggleFavorite;
    vm.stopFilter = stopFilter;
    vm.filterHiragana = filterHiragana;
    vm.openRouteMap = routeMap.open;

    ////////////

    function toggleFavorite(stop) {
      stop.favorite = !stop.favorite;
      Favorites.toggle(stop);
    }

    function filterHiragana(hitagana) {
      if (vm.query) {
        // 最初の1文字で判定する
        var firstChar = vm.query.charAt(0)
        var regexp = new RegExp(firstChar);
        if (regexp.test(hitagana.name)) {
          return hitagana;
        } else {
          return null;
        }
      } else {
        return hitagana
      }
    }

    function stopFilter(stop) {
      if (vm.query) {
        var regexp = new RegExp('^' + vm.query);
        if (regexp.test(stop.kana)) {
          return stop;
        } else {
          return null;
        }
      } else {
        return stop
      }
    }
    ////////////

    $scope.$on('$ionicView.enter', function() {
      vm.stops = Stops.findAll();
    });

  }

})();
