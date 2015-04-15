(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('routeMap', routeMap);

  function routeMap(constant, pdfStore, analytics) {

    // Public API here
    var service = {
      open: open
    };

    return service;

    ////////////
    function open() {
      analytics.trackShowRouteMapEvent();
      pdfStore.preview(constant.URL.routeMap);
    }

  }

})();