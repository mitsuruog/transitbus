(function() {
  'use strict';

  angular.module('transitbus.services')
    .config(exceptionHandler);

  function exceptionHandler($provide) {
    $provide.decorator("$exceptionHandler", function($delegate, $injector) {
      return function (exception, cause) {
        var $cordovaToast = $injector.get('$cordovaToast');
        var analytics = $injector.get('analytics');
        if ($cordovaToast.showLongBottom) {
          var message = exception.exception;
          if(!cause) {
            message = '予期せぬエラーが発生しました。' + message;
            // TODO ここでアナリティクスへ通知
          }
          $cordovaToast.showShortBottom(message);
        }
        // (Optional) Pass the error through to the delegate
        analytics.trackException(exception.exception);
        $delegate(exception, cause);
      }
    });
  }

})();
