(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('Seeds', Seeds);

  function Seeds() {

    //////////////

    // ここにアプリで利用するバス停データを入れます
    var stops = [{
      'name': 'あ',
      'stops': [{
        'name': 'バス停名',
        'kana': 'ばすていめい',
        'id': '1',
        'timetables': [{
          'direction': 'あっち　方面',
          'url': '<時刻表ダウンロード用URL>'
        }, {
          'direction': 'こっち　方面',
          'url': '<時刻表ダウンロード用URL>'
        }]
      }];

    // Public API here
    return {
      stops: stops
    };

  }

})();
