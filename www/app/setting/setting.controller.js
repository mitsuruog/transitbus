(function() {
  'use strict';

  angular.module('transitbus')
    .controller('SettingController', SettingController);

  function SettingController(constant, $scope, $q, $cordovaDialogs, $cordovaToast, Favorites, Stops, pdfStore, analytics) {

    var vm = this;
    vm.isShowDisclaimer = false;
    vm.allClear = allClear;
    vm.disclaimer = constant.MESSAGES.disclaimer;

    ////////////

    function allClear() {
      $cordovaDialogs.confirm(constant.ALL_REMOVE_CONFIRM.message, constant.ALL_REMOVE_CONFIRM.title, constant.ALL_REMOVE_CONFIRM.buttonLabels)
        .then(function(buttonIndex) {
          // 'OK' = 1, 'Cancel' = 2
          if (buttonIndex === 1) {
            $q.all([
                Favorites.clear(),
                pdfStore.removeAll(),
                Stops.clear()
              ])
              .then(function() {
                $cordovaToast.showLongBottom(constant.MESSAGES.removeAll);
              })
              .finally(function() {
                analytics.trackEvent('button', 'allClear', '', 1);
              });
          }
        });
    }

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      analytics.trackView('settings');
    });

  }

})();
