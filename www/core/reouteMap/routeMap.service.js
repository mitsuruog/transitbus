(function(){
  'use strict';

  angular.module('transitbus.services')
    .factory('routeMap', routeMap);

  function routeMap(pdfStore) {

    // Public API here
    var service = {
      open: open
    };

    return service;

    ////////////
    function open(){
      var url = 'http://www.transitbus.co.jp/data/bus/map/map_20140725.pdf';
      pdfStore.preview(url);
    }

  }

})();
