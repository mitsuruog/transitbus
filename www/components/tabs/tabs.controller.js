(function() {
  'use strict';

  angular.module('transitbus.components')
    .controller('TabsController', TabsController);

  function TabsController(Favorites) {

    var vm = this;
    vm.favorites = Favorites.getCurrent();

    ////////////

  }

})();
