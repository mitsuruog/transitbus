(function() {
  'use strict';

  angular.module('transitbus.components')
    .controller('DirectionModalNameController', DirectionModalNameController);

  function DirectionModalNameController($rootScope, pdfStore, directionModal, analytics) {

    var vm = this;
    vm.previewPdf = previewPdf;
    vm.close = directionModal.close;

    ////////////

    function previewPdf(timetable) {
      var label = $rootScope.ionicModal.stop.name + ':' + timetable.direction;
      analytics.trackShowTimetableEvent(label);
      pdfStore.preview(timetable.url);
    }

  }

})();
