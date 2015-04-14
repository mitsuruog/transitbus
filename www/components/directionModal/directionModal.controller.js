(function() {
  'use strict';

  angular.module('transitbus.components')
    .controller('DirectionModalNameController', DirectionModalNameController);

  function DirectionModalNameController(pdfStore, directionModal) {

    var vm = this;
    vm.previewPdf = previewPdf;
    vm.close = directionModal.close;

    ////////////

    function previewPdf(url) {
      pdfStore.preview(url);

    }

  }

})();
