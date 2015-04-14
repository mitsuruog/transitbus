(function() {
  'use strict';

  angular.module('transitbus.components')
    .factory('directionModal', directionModal);

  function directionModal($ionicModal, $rootScope) {

    // Public API here
    var service = {
      open: open,
      close: close,
    };

    $ionicModal.fromTemplateUrl('components/directionModal/directionModal.html', {
      animation: 'slide-in-up'
    }).then(function(modal) {
      $rootScope.ionicModal = modal;
    });


    return service;

    ////////////
    function open(stop) {
      $rootScope.ionicModal.stop = stop;
      $rootScope.ionicModal.show();
    }

    function close() {
      $rootScope.ionicModal.hide();
    }

  }

})();
