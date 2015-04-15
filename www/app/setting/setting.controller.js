(function() {
  'use strict';

  angular.module('transitbus')
    .controller('SettingController', SettingController);

  function SettingController($scope, $q, $cordovaDialogs, $cordovaToast, Favorites, Stops, pdfStore, analytics) {

    var MESSASES = {
      removeAll: 'データを初期化しました。'
    };

    var vm = this;
    vm.allClear = allClear;

    ////////////

    function allClear() {
      $cordovaDialogs.confirm('アプリ内のデータを初期化します。よろしいですか？', 'データ初期化の確認', ['初期化', 'キャンセル'])
        .then(function(buttonIndex) {
          // 'OK' = 1, 'Cancel' = 2
          if (buttonIndex === 1) {
            $q.all([
              Favorites.clear(),
              pdfStore.removeAll(),
              Stops.clear()
            ])
            .then(function() {
              $cordovaToast.showLongBottom(MESSASES.removeAll);
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
