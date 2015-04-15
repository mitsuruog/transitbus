// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('transitbus', [
  'ionic',
  'transitbus.constant',
  'transitbus.services',
  'transitbus.components',
  'ngAnimate',
  'angular-loading-bar',
  'ngLodash',
  'ngCordova'
])

.run(function($ionicPlatform, analytics) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }

      analytics.initialize();

    });
  })
  .config(function($ionicConfigProvider) {

    // [MEMO]androidでtabたtopになるのでここで設定する
    // [MEMO]toastとtabが重なって使いにくいのでやめる
    //$ionicConfigProvider.tabs.position('bottom');

  })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'components/tabs/tabs.html'
    })
    .state('tab.stops', {
      url: '/stops',
      views: {
        'tab-stops': {
          templateUrl: 'app/stops/stops.html',
          controller: 'StopsController as vm'
        }
      }
    })
    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'app/favorite/favorite.html',
          controller: 'FavoriteController as vm'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'app/setting/setting.html',
          controller: 'SettingController as vm'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/stops');

});
